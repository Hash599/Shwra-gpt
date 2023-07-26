  import { useRef, useState, useEffect } from "react";
    import Layout from "@/components/layout";
    import styles from "@/styles/Home.module.css";
    import { Message } from "@/types/chat";
    import Image from "next/image";
    import ReactMarkdown from "react-markdown";
    import LoadingDots from "@/components/ui/LoadingDots";
    import Typewriter from 'typewriter-effect';
    import { Document } from "langchain/document";
    import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from "@/components/ui/accordion";
    import { Icon } from "@iconify/react";
    
    export default function Home() {
      const [query, setQuery] = useState<string>("");
      const [activeTab, setActiveTab] = useState("chat");
      const [topP, setTopP] = useState(0.7);
      const [maxLength, setMaxLength] = useState(1000);
      const [frequencyPenalty, setFrequencyPenalty] = useState(-0.5);
      const [presencePenalty, setPresencePenalty] = useState(0.5);
      const [loading, setLoading] = useState<boolean>(false);
      const [error, setError] = useState<string | null>(null);
      const [lastQuestion, setLastQuestion] = useState<string>("");
      const [temperature, setTemperature] = useState(0); // Default temperature value
      const [condensePrompt, setCondensePrompt] = useState<string>('بالنظر إلى المحادثة التالية وسؤال المتابعة ، أعد صياغة سؤال المتابعة ليكون سؤالاً مستقلاً.');
      const [qaPrompt, setQAPrompt] = useState<string>('أنت مساعد AI مفيد. استخدم أجزاء السياق التالية للإجابة على السؤال في النهاية.');
      const [selectedModel, setSelectedModel] = useState("gpt-3.5-turbo-16k-0613");
      const [selectedMode, setSelectedMode] = useState("Chat");
      const [messageState, setMessageState] = useState<{
        messages: Message[];
        pending?: string;
        history: [string, string][];
        pendingSourceDocs?: Document[];
      }>({
        messages: [
          {
            message: "مرحبًا ، ما الذي تود أن تعرفه عن قضيتك القانونية؟",
            type: "apiMessage",
          },
        ],
        history: [],
      });
      const styless = {
        container: {
          marginTop: "20px",
          backgroundColor: "#F6F8FA",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        title: {
          marginBottom: "10px",
          color: "#333",
          fontSize: "30px",
          fontFamily: "Arial, sans-serif",
          
          fontWeight: "bold",
          
        },
        label: {
          marginRight: "10px",
          fontSize: "18px",
          fontFamily: "Arial, sans-serif",
        },
        input: {
          width: "200px",
        },
        currentTemperature: {
          marginTop: "10px",
          fontSize: "16px",
          color: "#666",
          fontFamily: "Arial, sans-serif",
        },
        button: {
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          backgroundColor: "#DDB669",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        },
      };
      const { messages, history } = messageState;

      const messageListRef = useRef<HTMLDivElement | any>(null);
      const textAreaRef = useRef<HTMLTextAreaElement>(null);

      
      useEffect(() => {
        const savedTemperature = localStorage.getItem('temperature');
        const savedSelectedModel = localStorage.getItem('selectedModel');
        const savedSelectedMode = localStorage.getItem('selectedMode');
        const savedQAPROMPTt=localStorage.getItem('QAPROMPT')
        const savedcondencePrompt=localStorage.getItem('condensePROMPT')
        const savedTOPP=localStorage.getItem('Topp')
        const savedpresencepenalty=localStorage.getItem('presencePenalty')
        const savedmaxLength=localStorage.getItem('maxLength')
        const savedfrequencyPenalty=localStorage.getItem('frequencyPenalty')
        // If there are saved settings, use them to initialize the state variables
        if (savedTemperature && savedSelectedModel && savedSelectedMode && savedQAPROMPTt&&  savedcondencePrompt&& savedfrequencyPenalty&&savedmaxLength&&savedpresencepenalty&&savedTOPP) {
          setTemperature(Number(savedTemperature));
          setSelectedModel(savedSelectedModel);
          setSelectedMode(savedSelectedMode);
          setCondensePrompt(savedcondencePrompt);
          setQAPrompt(savedQAPROMPTt);
          setTopP(Number(savedTOPP))
          setMaxLength(Number(savedmaxLength))
          setPresencePenalty(Number(savedpresencepenalty))
          setFrequencyPenalty(Number(savedfrequencyPenalty))
      
    
        }
      
        textAreaRef.current?.focus();
      }, []);

      //handle form submission
      async function handleSubmit(e: any) {

        e.preventDefault();
        setError(null);
        setLastQuestion(query);

        if (!query || query.trim()==='') {
          alert("Please input a question");
          return;
        }
      

        const question = query.trim();
        apiCall(question,temperature,selectedModel,qaPrompt,condensePrompt,topP,maxLength,presencePenalty,frequencyPenalty);
      
      }

      // this is the api call to get answer 

      const apiCall = async (question : string,temp:number,modelname: any,qap:any,conpromp:any,topp:any,maxl:any,presencep:any,freqP:any )=> {
        setMessageState((state) => ({
          ...state,
          messages: [
            ...state.messages,
            {
              type: "userMessage",
              message: question,

            },
          ],
        }));
      
        setLoading(true);
        setQuery("");

        try {
          const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              question,
              history,
              temperature,
              selectedModel,qaPrompt,condensePrompt,topP,maxLength,presencePenalty,frequencyPenalty
            }),
          });
          const data = await response.json();
        
          console.log(data)

          if (data.error) {
          setError("error");

            setMessageState((state) => ({
              ...state,
              messages: [
                ...state.messages,
                {
                  type: "apiMessage",
                  message: "لا يمكننا معالجة طلبك ، حاول مرة اخرى.",
                  sourceDocs: data.sourceDocuments,
                },
              ],
              history: [...state.history, [question, data.text]],
            }));
          } else {
            setMessageState((state) => ({

              ...state,
              messages: [
                ...state.messages,
                {
                  type: "apiMessage",
                  message: data.text,
                  sourceDocs: data.sourceDocuments,
                },
              ],
              history: [...state.history, [question, data.text]],
            }));
          setError(null);
          }
          setLoading(false);

        
        } catch (error) {
          setLoading(false);
          setError("An error occurred while fetching the data. Please try again.");
          console.log("error", error);
        }
        
      }

      //prevent empty submissions
      const handleEnter = (e: any) => {
        if (e.key === "Enter" && query.trim()) {
          handleSubmit(e);

          
        } else if (e.key == "Enter") {  
          e.preventDefault();
        }
      };

    // To regenrate the response
    const handleRegenerateResponse = async ()=> {
      setError(null);

      if (!lastQuestion || lastQuestion.trim()==='') {
        alert("Please input a question");
        return;
      }
      const question = lastQuestion.trim();
      apiCall(question,temperature,selectedModel,qaPrompt,condensePrompt,topP,maxLength,presencePenalty,frequencyPenalty);
    }
      // to scroll to the bottom
    useEffect(()=>{
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight
    },[messages.length]) 

      // stores the  feedback of user (index of message ) neg for dislike positive for like
      const [userFeedback, setUserFeedback] = useState<any>([]);
      const handleTabChange = (tabName: string) => {
        setActiveTab(tabName);
      };
      const handleTemperatureChange = (event:any) => {
        setTemperature(event.target.value);
      };
      const handleTopPChange = (event:any) => {
        setTopP(event.target.value);
      };
      const handleMaxlengthChange = (event:any) => {
        setMaxLength(event.target.value);
      };
      const handleFrequencyPChange = (event:any) => {
        setFrequencyPenalty(event.target.value);
      };
      const handlePresencePlenty = (event:any) => {
        setPresencePenalty(event.target.value);
      };

      const handleModelSelect = (e: any) => {
        setSelectedModel(e.target.value);
      };
      const handleModeSelect = (e: any) => {
        setSelectedMode(e.target.value);
      };
      
      const handleButtonClick = () => {
        // You can pass the data (temperature, selectedModel, selectedMode) to another component
        // to handle the behavior change or take any action based on the selected values
      handleTabChange('chat')
      localStorage.setItem('temperature', temperature.toString());
      localStorage.setItem('selectedModel', selectedModel);
      localStorage.setItem('selectedMode', selectedMode);
      localStorage.setItem('QAPROMPT', qaPrompt);
      localStorage.setItem('Topp', topP.toString());
      localStorage.setItem('presencePenalty', presencePenalty.toString());
      localStorage.setItem('frequencyPenalty', frequencyPenalty.toString());
      localStorage.setItem('maxLength', maxLength.toString());
     
        console.log("Temperature:", temperature);
        console.log("Selected Model:", selectedModel);
        console.log("Selected Mode:", selectedMode);
      alert('Changes Applied')
      window.location.reload();
      };
    
      return (
        <>
        <div  style={{display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <a
        href="#chat"
        className={`${activeTab === "chat" ? styles.activeTab : ""}`}
        onClick={() => handleTabChange("chat")}
        style={{marginRight:'10px',fontSize:'20px'}}
      >
        Chat
      </a>
      <span style={{ width: "20px", display: "inline-block" }}></span>
      <a
        href="#settings"
        className={`${activeTab === "settings" ? styles.activeTab : ""}`}
        onClick={() => handleTabChange("settings")}
        style={{marginLeft:"10px",fontSize:'20px'}}
      >
        Settings
      </a>
    </div>
    {
        activeTab=="chat"?(

          
          <Layout>
            <div className="mx-auto flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl my-4 font-[600] leading-[1.2] tracking-tighter text-center">
                اسأل شوري المحامي الرقمي
              </h1>
              <main className={styles.main}>
                <div className={styles.cloud}>
                  <div ref={messageListRef} className={styles.messagelist}>
                    {messages.map((message, index) => {
                      let icon;
                      let className;
                      if (message.type === "apiMessage") {
                        icon = (
                          <Image
                            key={index}
                            src="/logo@3x.webp"
                            alt="AI"
                            width="45"
                            height="45"
                            color="#ddb669"
                            className={styles.boticon}
                            priority
                            />
                            );
                            className = styles.apimessage;
                          } else {
                        icon = (
                          <Image
                          key={index}
                            src="/newusericon.png"
                            alt="Me"
                            width="40"
                            height="40"
                            className={styles.usericon}
                            priority
                            />
                            );
                            // The latest message sent by the user will be animated while waiting for a response
                            className =
                            loading && index === messages.length - 1
                            ? styles.usermessagewaiting
                            : styles.usermessage;
                        }
                        return (
                          <>
                          <div   key={`chatMessage-${index}`} className={className}>
                            {icon}
                            <div  className={styles.markdownanswer}>
                            
                              <ReactMarkdown  linkTarget="_blank"> 
                                {message.message} 
                              </ReactMarkdown>
                            
                            </div>
                          </div>
                          {message.sourceDocs &&   (
                            <div 
                            className="bg-[#FBF7EE] px-12 md:px-12 pb-12 relative"
                              key={`sourceDocsAccordion-${index}`}
                              >
                              <Accordion 
                                type="single"
                                collapsible
                                className="flex-col"
                                >
                                {message.sourceDocs.map((doc, index) => (
                                  <div key={`messageSourceDocs-${index}`}>
                                    <AccordionItem value={`item-${index}`}>
                                      <AccordionTrigger>
                                        <h3 className="font-semibold">
                                          المصدر {index + 1}
                                        </h3>
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <ReactMarkdown linkTarget="_blank">
                                          {doc.pageContent}
                                        </ReactMarkdown>
                                        <p className="mt-2">
                                          {/* <b>Source:</b> {doc.metadata.source} */}
                                        </p>
                                      </AccordionContent>
                                    </AccordionItem>
                                  </div>
                                ))}
                              </Accordion> 

                              {userFeedback.includes(-index) ||
                              userFeedback.includes(index) ? (
                                <div className={styles.feedbackGiven}>
                                  <p className="text-sm font-bold">
                                    {userFeedback.includes(-index)
                                      ? "لم يعجبنى"
                                      : " اعجبني"}{" "}
                                  </p>

                                  {userFeedback.includes(-index) ? (
                                    <Icon icon="solar:dislike-bold" />
                                    ) : (
                                      <Icon icon="solar:like-bold" />
                                      )}
                                </div>
                              ) : (
                                <div   className={styles.feedbackTaker}>
                                  <p className="text-sm font-bold">
                                    هل اعجبك التعليق؟
                                  </p>

                                  <Icon
                                    onClick={() =>
                                      setUserFeedback([...userFeedback, -index])
                                    }
                                    className={styles.feedbackIcons}
                                    icon="uiw:dislike-o"
                                    />

                                  <Icon
                                    onClick={() =>
                                      setUserFeedback([...userFeedback, index])
                                    }
                                    className={styles.feedbackIcons}
                                    icon="uiw:like-o"
                                    />
                                </div>

    )}
                            </div>
                            
                          )}
                            

                        </>
                      );
                    })}

                  </div>
                  
                </div>
              
                <div className={styles.center}>
                {error && (
                  <div>
                    <button 
                    onClick={handleRegenerateResponse} 
                    className="mt-1 flex items-center content-center px-3 py-2 rounded-md gap-2" 
                    style={{background:'#DDB669 ',color:'white'}}>
                    <Icon icon="ri:refresh-line" />  
                    تجديد الاستجابة
                  </button>
                  </div>
                  
                  )}
                  <div className={styles.cloudform}>
                    <form onSubmit={handleSubmit}>
                      <div className={styles.textAreaWrapper}>
                        <textarea
                          disabled={loading}
                          onKeyDown={handleEnter}
                          ref={textAreaRef}
                          autoFocus={false}
                          rows={1}
                          maxLength={512}
                          id="userInput"
                          name="userInput"
                          placeholder={
                            loading
                            ? "في انتظار الاستجابة ..."
                            : "ما موضوع هذه القضية القانونية؟"
                          }
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          className={styles.textarea}
                          />
                        <button
                          type="submit"
                          
                          
                          disabled={loading}
                          className={styles.generatebutton}
                          >
                          {loading ? (
                            <div className={styles.loadingwheel}>
                              <LoadingDots color="#000" />
                            </div>
                          ) : (
                            // Send icon SVG in input field 
                            <svg
                            viewBox="0 0 20 20"
                            className={styles.svgicon}
                            xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                              
                            </svg>
                            
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
            
              </main>
            </div>
            <footer className="flex flex-col justify-center items-center ">
              <a href="http://shwra.sa">shwra © 2023 All Right Reserved </a>
              <br />
              <a href="http://shwra.sa"> {selectedModel}اطلب خدمة قانونية</a>
              <p className="text-xs mt-2"></p>
            </footer>
          </Layout>
      ):(
        <div style={styless.container}>
        <h2 style={styless.title}>الإعدادات</h2>
        <div style={{ display: "flex", gap: "20px" }}>
<div style={{ flex: 1 }}>

        <label htmlFor="temperature" style={styless.label}>
          درجة الحرارة 
        </label>
        <input
          type="range"
          id="temperature"
          name="temperature"
          min="0.0"
          max="1.0"
          step="0.1"
          value={temperature}
          onChange={handleTemperatureChange}
          style={styless.input}
        />
        <p style={styless.currentTemperature}>
          درجة الحرارة الحالية: {temperature}
        </p>
        <div style={{margin:"15px"}}>
    <label htmlFor="model">اختر النموذج:</label>
    <select
      id="model"
      name="model"
      value={selectedModel}
      onChange={handleModelSelect}
      style={{margin:'12px',border:"2px solid black"}}
      >
      <option value="gpt-3.5-turbo-16k-0613" style={{textAlign:'center'}}>gpt-3.5-turbo-16k-0613</option>
      <option value="gpt-3.5-turbo" style={{textAlign:'center'}}>gpt-3.5-turbo</option>
      <option value="text-davinci-003" style={{textAlign:'center'}}>text-davinci-003</option>
    </select>
    </div>
        <div style={{margin:"15px"}}>
    <label htmlFor="model">أسلوب:</label>
    <select
      id="mode"
      name="mode"
      value={selectedMode}
      onChange={handleModeSelect}
      style={{margin:'12px',border:"2px solid black"}}
      >
      <option value="Chat" style={{textAlign:'center'}}>  Chat</option>
      <option value="Complete" style={{textAlign:'center'}}>Complete</option>
      <option value="Edit" style={{textAlign:'center'}}>Edit</option>
    </select>
    </div>
    <div style={{margin:"15px"}}>
      <label>أعلى قيمة لـ  التحديد:</label>
      <input
          type="range"
          id="topP"
          name="topP"
          min="0.0"
          max="1.0"
          step="0.1"
          value={topP}
         onChange={handleTopPChange}
          style={styless.input}
        />
        <p style={styless.currentTemperature}>
        على قيمة لـ  التحديد: {topP}
        </p>

      <label>الطول الأقصى:</label>
      <input
        type="number"
        id="MaxLength"
        name="maxLength"
      
        value={maxLength}
        onChange={handleMaxlengthChange}
      />
        <p style={styless.currentTemperature}>
        الطول الأقصى {maxLength}
        </p>

      <label>عقوبة التكرار:</label>
      <input
        type="range"
        step="0.1"
        id="frequencyPenalty"
        name="frequencyPenalty"
        min="0.0"
        max="1.0"
        value={frequencyPenalty}
        onChange={handleFrequencyPChange}
              />
               <p style={styless.currentTemperature}>
               عقوبة التكرار: {frequencyPenalty}
        </p>

      <label>عقوبة الحضور:</label>
      <input
         type="range"
         step="0.1"
         id="presencePenalty"
         name="presencePenalty"
         min="0.0"
         max="1.0"
        value={presencePenalty}
        onChange={handlePresencePlenty}
      />
   <p style={styless.currentTemperature}>
               عقوبة الحضور: {presencePenalty}
        </p>

      
    </div>
        </div>
    <div style={{ flex: 1 }}>
    <label htmlFor="qaPrompt">مستخدم</label>
      <textarea
        id="qaPrompt"
        value={qaPrompt}
        onChange={(e) => setQAPrompt(e.target.value)}
        style={{ width: "100%", height: "200px" }}
        />
</div>
<div style={{ flex: 1 }}>
      {/* Input for Condense prompt */}
      <label htmlFor="condensePrompt">نظام</label>
      <textarea
        id="condensePrompt"
        value={condensePrompt}
        onChange={(e) => setCondensePrompt(e.target.value)}
        style={{ width: "100%", height: "200px" }}
        />
        </div>

    </div>
    <button onClick={handleButtonClick} style={styless.button}>
          Apply Changes
        </button>
      </div>
      )
      }
      
      </>
      );
      }

      
