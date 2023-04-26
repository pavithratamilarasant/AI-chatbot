import React from 'react'
import chatbot from '../pictures/chatbot.jpg'
import { useState, useEffect } from 'react'
export default function AI() {

    const [allMessage, setallMessage] = useState([])
    const [chat, setchat] = useState('')
    // const [heart] = useState(['💘', '💖', '💗', '💓', '💚', '💙', '💛', '💜', '🧡', '💝', '💞', '❤', '🖤', '❣', '♥'])
    const [hearttwo] = useState(['💘💖💗💓💚💙💛💜🧡💝💞❤🖤❣♥'])
    const [name, setname] = useState('')
    useEffect(() => {
        const nameget = () => {
            let name = prompt('Enter Your Name')
            setname(name)
            let userMessage = { message: 'i\'m Your chatbot... 😇', user: 'chat' }
            let userMessage2 = { message: `Welcome to ${name}   💓`, user: 'chat' }
            let userMessage3 = { message: `say Hi`, user: 'chat' }
            setallMessage([...allMessage, userMessage2, userMessage, userMessage3])

        }
        return nameget()
    }, [])
    const scrool = () => {
        document.getElementById('top').scrollIntoView();
    };
    const sent = () => {

        if (!!chat) {
            let userMessage = { message: chat, user: 'user' }
            allMessage.push(userMessage)
            document.getElementById('btn').scrollIntoView()
            cb()
            setchat('')
        }
    }
    const cb = () => {
        setTimeout(() => { scrool(); }, 100);
        let data = chat.toLowerCase()
        if (data.includes('hello') || data.includes('hi') || data.includes('hii') || data.includes('hai')) {
            let userMessage = { message: `Hi Dear ${name} 😍..i'm chatbot`, user: 'chatbot' }
            let userMessage2 = { message: 'How are you', user: 'chatbot' }
            setallMessage([...allMessage, userMessage, userMessage2])
            setchat('')
        }
        else if (data.includes('heart')) {

            let userMessage = { message: hearttwo, user: 'chatbot' }
            let userMessage2 = { message: `Now are you Happy ${name}`, user: 'chatbot' }
            setallMessage([...allMessage, userMessage,userMessage2])
            setchat('')
        }
        else if (data.includes('date')) {
            let date = new Date().getDate()
            let month = new Date().getMonth()
            let year = new Date().getFullYear()
            let userMessage = { message: ` Today ${date}-${month + 1}-${year}`, user: 'chatbot' }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }
        else if (data.includes('time')) {
            let hours = new Date().getHours()
            let min = new Date().getMinutes()
            let userMessage = { message: ` Now Time is ${hours}:${min}`, user: 'chatbot' }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }
        else if (data.includes('fine')) {
            let userMessage = { message: `Yeah pretty Good ... have a nice day..${name}..👍`, user: 'chatbot' }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }

        else if (data.includes('thank')) {

            let userMessage = { message: `Welcome ${name}..👍 Be happy for ever...😍`, user: 'chatbot' }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }
        else if (data.includes('lovers joke') || data.includes('next joke')) {

            let userMessage = {
                message: `காதலன்: எப்பவுமே உன்னோட நினைப்பாவே இருக்கு டார்லிங்..... காதலி : இப்போதானே நாம பேசி முடிச்சோம்? காதலன் : அச்சச்சோ! மறுபடியும் உனக்கே போன் செய்துட்டேனா? ஸாரி..
`, user: 'chatbot'
            }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }
        else if (data.includes('joke')) {

            let userMessage = {
                message: `
            உன்னை நாளைக்கு காலைல 5 மணிக்கு தூக்குல போடப்போறோம்...           
            ஹா ஹா ஹா
            எதுக்கு சிரிக்கற?
            நான் எழுந்துக்கறதே 9 மணிக்குத்தானே?`, user: 'chatbot'
            }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }
        else if (data.includes('like') || data.includes('love')) {

            let userMessage = { message: `Yeah i like and love You more dear ${name}..💘`, user: 'chatbot' }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }
        else if (data.includes('feel sad') || data.includes('feel bad')) {
            let userMessage = { message: `Dont worry ${name} everthig will be change one day...Nothing is permanent ${name} 😇`, user: 'chatbot' }
            let userMessage2 = { message: `Just move forward.. i'm alway with you ${name} 😍`, user: 'chatbot' }
            setallMessage([...allMessage, userMessage, userMessage2])
            setchat('')
        }
        else if (data.includes('feel good') || data.includes('feel happy')|| data.includes('happy')) {

            let userMessage = { message: `Good ... happy for ever ${name} 😍 and you look pretty `, user: 'chatbot' }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }
        else if (data.includes('story')) {
            let userMessage2 = { message: `ஒரு குளத்தில் அழகான தங்க அன்னப்பறவை`, user: 'chatbot' }
            let userMessage = {
                message: `ஒரு குளத்தில் அழகான தங்க அன்னப்பறவை வாழ்ந்து வந்தது. பக்கத்து கிராமத்தில் இருந்த ஒரு விவசாயியின் மறுஜென்மம் தான் இந்த அன்னப்பறவை. ஒரு நாள் அந்த விவசாயியின் மனைவி குளத்தில் தண்ணீர் எடுக்க வந்தார்கள்.

            அந்தத் தங்க அன்னப்பறவை அவளை பார்த்தது. அதிசயம் என்னவென்றால் அந்த அன்னப்பறவை அவர்களிடம் பேசியது, “நான் தான் உன்னுடைய இறந்து போன கணவன். இப்போது தங்க அன்னபறவையாய் பிறந்துள்ளேன். உனக்கும் நம்மளுடைய பசங்களுக்கும் உதவி பண்ண வேண்டும் என்று ஆசைப்படுகிறேன்” என்றது.
            
            “ஆனால் உன்னால எப்படி எங்களுக்கு உதவி பண்ண முடியும்” என்று அவர் மனைவி கேட்டாள். அதற்கு அவர், “நீ தினமும் என்னிடமிருந்து ஒரு தங்க இறகை எடுத்துக் கொண்டு செல்லலாம். அதை விற்று உங்களுக்குத் தேவையான அனைத்தையும் செய்து கொள்ளுங்கள்” என்றது.
            
            அதற்கு அவருடைய மனைவி, “நீ சொல்வது ரொம்பவே நல்ல யோசனை. இனிமேல் நாங்கள் எதற்கும் கஷ்டப்பட வேண்டியதில்லை” என்றாள். தினமும் அவருடைய மனைவி யாருக்கும் தெரியாமல் குளத்திற்கு வந்து ஒரு தங்க இறகை எடுத்துக் கொண்டு செல்வாள்.
            
            அப்படி ஒரு அழகான வீட்டையும் கட்டி விட்டார்கள். அவங்க வீட்டுல வேலைக்கு ஆளும் வச்சிருந்தாங்க. அப்போ ஒரு நாள் அவங்க யோசிச்சாங்க, “ஒருவேளை  தங்க அன்னப்பறவை மட்டும் காணாமல் போனால் நான் என்ன பண்ணுவேன்”. அதனால் மறுநாள் குளத்திற்கு செல்லும் போது மனைவி அன்னப் பறவையிடம், “நீங்க எங்க கூடவே வந்து தங்கிக்கோங்க நாங்க உங்கள ரொம்ப நல்ல பாத்துக்குவோம்”அப்படி சொன்னாங்க.
            
            அன்னப்பறவையும் உடனே ஒத்துகிச்சு. ஏன்னா அவரு அவரோட பசங்கள பாக்கணும்னு ஆசைப்பட்டார். மனைவி அவர்களுடைய வீட்டுக்குப் பின்னாடி அந்த அன்னப்பறவை தங்குவதற்கு ஒரு இடத்தை ஏற்பாடு செய்தாள்.
            
            அந்த அன்னப்பறவையும் அங்கே சந்தோஷமாக வாழ்ந்து வந்தது. ரொம்ப நாள் அப்புறம் அந்தச் அன்னப் பறவைக்கு வயசு ஆகிடுச்சு. அவருடைய மனைவி தினமும் இறகு எடுப்பது கடினமாக உள்ளதால் ஒரேயடியாக நிறைய இறகுகளை எடுக்க முடிவு செய்து, அந்த அன்னப்பறவையிடம் சென்று இங்க பாருங்க தினம் ஒரு இறகை எடுப்பது எனக்கு ரொம்ப கஷ்டமா இருக்கு.
            
            “அதனால சேர்த்து நிறைய இறகுகள் எடுக்கலாம் என்று எண்ணுகிறேன்” அப்படின்னு சொன்னாள். அதற்கு அந்த அன்னபறவை, “நீ சொல்லுவது சரிதான் ஆனால் என்னால் ஒரு தங்க இறகுக்கு மேல் ஒருநாள் தர இயலாது என்று சொன்னது”. உடனே மனைவி அந்த அன்னப்பறவையை பிடித்து எல்லா தங்க இறகுகளையும் எடுத்து விட்டாள். அப்போது அந்த இறகுகள் எல்லாம் சாதாரண இறகுகளாக மாறியது. உடனே அவள் அதிர்ச்சியுற்றாள்.
            
            அப்போது அந்த அன்ன பறவை சொன்னது, “என் பேச்சை நீ மீறி விட்டாய். என்னால் ஒரு நாள் ஒரு தங்க இறகை மட்டுமே தர முடியும்  அதற்கு மேல் தங்க இறகை என்னால் தர இயலாது” என்று சொன்னது.
            
            உடனே அவள் கோபத்தில் அந்த அன்னப் பறவையை பிடித்து வெளியே எறிந்து விட்டாள். அந்த அன்னப்பறவையும் சோகத்தில் மீண்டும் குளத்திற்கு புறப்பட்டு சென்றது. அவர் மனைவி மீண்டும் எல்லா பணத்தையும் செலவழித்து ஏழையாக மாறி விட்டாள்.
            
            அவளுக்கு இப்போது உதவி செய்ய எந்த அன்னப்பறவையும் இல்லை, யாரும் இல்லை.`, user: 'chatbot'
            }
            setallMessage([...allMessage, userMessage2, userMessage])
            setchat('')
        }
        else if (data.includes('morning')) {

            let userMessage = { message: `Good morning ${name} 😍`, user: 'chatbot' }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }
        else if (data.includes('afternoon')) {

            let userMessage = { message: `Good afternoon ${name} 😍`, user: 'chatbot' }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }
        else if (data.includes('evening')) {

            let userMessage = { message: `Good eveniing ${name} 😍`, user: 'chatbot' }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }
        else if (data.includes('good night') || data.includes('gn')) {

            let userMessage = { message: `Good night sweet dreams ${name} 😍`, user: 'chatbot' }
            setallMessage([...allMessage, userMessage])
            setchat('')
        }

        else if (data.includes('byee') || data.includes('bye')) {
            let userMessage = { message: `Byee Dear ${name}😍`, user: 'chatbot' }
            let userMessagetwo = { message: 'we will meet soon 😉', user: 'chatbot' }
            setallMessage([...allMessage, userMessage, userMessagetwo])
            setchat('')
        }

        else {
            let userMessage = { message: 'Sorry... Not valid data 😣', user: 'chatbot' }
            let userMessagetwo = { message: 'Any me another Queries 😃', user: 'chatbot' }
            setallMessage([...allMessage, userMessage, userMessagetwo])
            setchat('')
        }
    }
    return (
        <div className="container mt-2">
            <div className="row ">
                <div className="col-1"></div>
                <div className='col-8 head'>
                    <img src={chatbot} style={{ width: '80px' }} alt="chatbot_image" />
                    <h5>{` Welcome  to ${name} 💓 `}</h5>
                </div>
                <div className="col-3"></div>

            </div>
            <div className="row rowone">
                <div className="col-1"></div>
                <div className="col-8  border  ">

                    {allMessage.length === 0 ? <h5>Enter Your Name First</h5> : allMessage.map((value, index) => {

                        if (value.user === 'user') return <><div key={index} className='chat col-sm-3 float-end bg-warning   '>   <i className="fa fa-user mx-1  " aria-hidden="true"></i> {value.message} </div><br /><br /></>
                        else return <><div key={index} className='chat col-sm-5 bg-info  p-1 w-50'>   <i className="fa fa-commenting " aria-hidden="true"></i> {value.message} </div><br /></>




                    })}
                    <div className='d-flex justify-content-center'>

                        <input className='form-control d-inline w-50 mb-2 ' type="text" name="chat" id='top' placeholder='Text here' value={chat} onInput={e => setchat(e.target.value)} />
                        <button className="btn btn-primary mx-3 " id='btn' onClick={sent}><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>

                </div>
                <div className="col-3  align-self-end  mb-3">

                    <h5>chat with chatbot</h5>
                    <div>1.Enter Your name first</div>
                    <div>2.say Hi || hello || hai</div>
                    <div>3.say fine</div>
                    <div>4.say good morning || good evening || good night || gn</div>
                    <div>5.say tell me today date</div>
                    <div>6.say tell me today time</div>
                    <div>7.say today i feel bad || sad</div>
                    <div>8.say now feel good || happy</div>
                    <div>9.say do you love me || like me</div>
                    <div>10.say tell me one joke</div>
                    <div>11.say next joke || lovers joke</div>
                    <div>12.say one story</div>
                    <div>13.say give me one heart</div>
                    <div>14.say thank you</div>
                    <div>15.say byee</div>















                </div>
            </div>
        </div>
    )
}
