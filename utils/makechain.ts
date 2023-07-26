import { OpenAI } from 'langchain/llms/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { ConversationalRetrievalQAChain } from 'langchain/chains';

const CONDENSE_PROMPT = `بالنظر إلى المحادثة التالية وسؤال المتابعة ، أعد صياغة سؤال المتابعة ليكون سؤالاً مستقلاً.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`;

const QA_PROMPT = `أنت مساعد AI مفيد. استخدم أجزاء السياق التالية للإجابة على السؤال في النهاية.
إذا كنت لا تعرف الإجابة ، قل فقط أنك لا تعرف. لا تحاول اختلاق إجابة.
إذا لم يكن السؤال متعلقًا بالسياق ، فأجب بأدب أنك مضبوط للإجابة فقط على الأسئلة المتعلقة بالسياق.

{context}

Question: {question}
Helpful answer in markdown:`;

export const makeChain = (vectorstore: PineconeStore, temperature: number, modelname: any, qaPrompt: string, condensePrompt: string,Topp:any,MaxLength:any,presenceP:any,frequencyP:any) => {
  const model = new OpenAI({
    temperature: temperature, // increase temepreature to get more creative answers
    modelName: modelname, //change this to gpt-4 if you have access

  });

  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorstore.asRetriever(),
    {
      qaTemplate: `${qaPrompt} 
      {context}

      Question: {question}
      Helpful answer in markdown:`,
      questionGeneratorTemplate: `${condensePrompt}
      Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`,
      returnSourceDocuments: true, //The number of source documents returned is 4 by default
    },
  );
  return chain;
};
