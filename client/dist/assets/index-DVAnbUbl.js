import{j as i,b as w}from"./hooks-BiQeOY3r.js";import{F as B}from"./App-DY5ymaZ2.js";import"./index-BgM4Nman.js";const O=({status:r,agentStatus:e})=>i.jsxs("div",{className:"status-card",children:[i.jsx("div",{className:"status-indicator"}),i.jsxs("div",{className:"status-section",children:[i.jsx("h4",{className:"status-title",children:"STATUS"}),i.jsx("div",{className:"status-value",children:i.jsx("span",{className:`status-text ${r.toLowerCase()}`,children:r.toLowerCase()})})]}),i.jsxs("div",{className:"status-section",children:[i.jsx("h4",{className:"status-title",children:"AGENT STATUS"}),i.jsxs("div",{className:"status-value",children:[i.jsxs("div",{className:"status-dots",children:[i.jsx("span",{className:"status-dot"}),i.jsx("span",{className:"status-dot"}),i.jsx("span",{className:"status-dot"})]}),i.jsx("span",{className:`status-text ${e.toLowerCase()}`,children:e})]})]})]}),E=({children:r,onClick:e,disabled:o=!1,variant:s="primary",icon:n,fullWidth:c=!1,type:a="button"})=>i.jsxs("button",{type:a,onClick:e,disabled:o,className:`btn btn-${s} ${c?"btn-full-width":""}`,children:[n&&i.jsx("span",{className:"button-icon",children:n}),r]}),R=({volume:r,onChange:e})=>{const o=s=>{const n=s/10*100;return`linear-gradient(to right, #6366F1 0%, #6366F1 ${n}%, #E2E8F0 ${n}%, #E2E8F0 100%)`};return i.jsxs("div",{className:"volume-container",children:[i.jsx("h3",{className:"volume-title",children:"Volume Control"}),i.jsxs("div",{className:"volume-controls",children:[i.jsx("div",{className:"volume-icon",children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M11 5L6 9H2V15H6L11 19V5Z",fill:"#6366F1",stroke:"#6366F1",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53",stroke:"#6366F1",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),i.jsx("div",{className:"volume-slider-container",children:i.jsx("input",{type:"range",min:"0",max:"10",step:"1",value:r,onChange:s=>e(parseInt(s.target.value)),className:"volume-slider",style:{background:o(r)}})}),i.jsxs("div",{className:"volume-value",children:[r,"/10"]})]})]})},W=({messages:r})=>{const e=w.useRef(null);w.useEffect(()=>{e.current&&(e.current.scrollTop=e.current.scrollHeight)},[r]);const o=s=>new Date(s).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return i.jsxs("div",{className:"transcript-container",children:[i.jsx("h3",{className:"transcript-title",children:"Conversation Transcript"}),i.jsx("div",{className:"transcript-content",ref:e,children:r.length===0?i.jsxs("div",{className:"transcript-empty",children:[i.jsx("p",{children:"No conversation history yet."}),i.jsx("p",{children:"Start a conversation to see the transcript here."})]}):r.map((s,n)=>i.jsxs("div",{className:`transcript-message ${s.role==="user"?"user-message":"assistant-message"}`,children:[i.jsxs("div",{className:"message-header",children:[i.jsx("span",{className:"message-sender",children:s.role==="user"?"You":"Francine"}),i.jsx("span",{className:"message-time",children:o(s.timestamp)})]}),i.jsx("div",{className:"message-content",children:s.content})]},n))})]})},U=({isSpeaking:r=!1})=>i.jsx("div",{className:"logo-container",children:i.jsxs("div",{className:`logo-circle ${r?"speaking":""}`,children:[i.jsx("div",{className:`logo-glow ${r?"active":""}`}),i.jsx("div",{className:"logo-label",children:"Francine"})]})});function _(){return _=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var s in o)({}).hasOwnProperty.call(o,s)&&(r[s]=o[s])}return r},_.apply(null,arguments)}function $(r){const e=new Uint8Array(r);return window.btoa(String.fromCharCode(...e))}function P(r){const e=window.atob(r),o=e.length,s=new Uint8Array(o);for(let n=0;n<o;n++)s[n]=e.charCodeAt(n);return s.buffer}const M=new Map;function V(r,e){return async o=>{const s=M.get(r);if(s)return o.addModule(s);const n=new Blob([e],{type:"application/javascript"}),c=URL.createObjectURL(n);try{return await o.addModule(c),void M.set(r,c)}catch{URL.revokeObjectURL(c)}try{const a=`data:application/javascript;base64,${btoa(e)}`;await o.addModule(a),M.set(r,a)}catch{throw new Error(`Failed to load the ${r} worklet module. Make sure the browser supports AudioWorklets.`)}}}const z=V("raw-audio-processor",`
const BIAS = 0x84;
const CLIP = 32635;
const encodeTable = [
  0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,
  4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
];

function encodeSample(sample) {
  let sign;
  let exponent;
  let mantissa;
  let muLawSample;
  sign = (sample >> 8) & 0x80;
  if (sign !== 0) sample = -sample;
  sample = sample + BIAS;
  if (sample > CLIP) sample = CLIP;
  exponent = encodeTable[(sample>>7) & 0xFF];
  mantissa = (sample >> (exponent+3)) & 0x0F;
  muLawSample = ~(sign | (exponent << 4) | mantissa);
  
  return muLawSample;
}

class RawAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
              
    this.port.onmessage = ({ data }) => {
      switch (data.type) {
        case "setFormat":
          this.isMuted = false;
          this.buffer = []; // Initialize an empty buffer
          this.bufferSize = data.sampleRate / 4;
          this.format = data.format;

          if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {
            globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {
              this.resampler = resampler;
            });
          }
          break;
        case "setMuted":
          this.isMuted = data.isMuted;
          break;
      }
    };
  }
  process(inputs) {
    if (!this.buffer) {
      return true;
    }
    
    const input = inputs[0]; // Get the first input node
    if (input.length > 0) {
      let channelData = input[0]; // Get the first channel's data

      // Resample the audio if necessary
      if (this.resampler) {
        channelData = this.resampler.full(channelData);
      }

      // Add channel data to the buffer
      this.buffer.push(...channelData);
      // Get max volume 
      let sum = 0.0;
      for (let i = 0; i < channelData.length; i++) {
        sum += channelData[i] * channelData[i];
      }
      const maxVolume = Math.sqrt(sum / channelData.length);
      // Check if buffer size has reached or exceeded the threshold
      if (this.buffer.length >= this.bufferSize) {
        const float32Array = this.isMuted 
          ? new Float32Array(this.buffer.length)
          : new Float32Array(this.buffer);

        let encodedArray = this.format === "ulaw"
          ? new Uint8Array(float32Array.length)
          : new Int16Array(float32Array.length);

        // Iterate through the Float32Array and convert each sample to PCM16
        for (let i = 0; i < float32Array.length; i++) {
          // Clamp the value to the range [-1, 1]
          let sample = Math.max(-1, Math.min(1, float32Array[i]));

          // Scale the sample to the range [-32768, 32767]
          let value = sample < 0 ? sample * 32768 : sample * 32767;
          if (this.format === "ulaw") {
            value = encodeSample(Math.round(value));
          }

          encodedArray[i] = value;
        }

        // Send the buffered data to the main script
        this.port.postMessage([encodedArray, maxVolume]);

        // Clear the buffer after sending
        this.buffer = [];
      }
    }
    return true; // Continue processing
  }
}
registerProcessor("raw-audio-processor", RawAudioProcessor);
`);function q(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}class F{static async create({sampleRate:e,format:o,preferHeadphonesForIosDevices:s}){let n=null,c=null;try{const d={sampleRate:{ideal:e},echoCancellation:{ideal:!0},noiseSuppression:{ideal:!0}};if(q()&&s){const p=(await window.navigator.mediaDevices.enumerateDevices()).find(g=>g.kind==="audioinput"&&["airpod","headphone","earphone"].find(y=>g.label.toLowerCase().includes(y)));p&&(d.deviceId={ideal:p.deviceId})}const h=navigator.mediaDevices.getSupportedConstraints().sampleRate;n=new window.AudioContext(h?{sampleRate:e}:{});const v=n.createAnalyser();h||await n.audioWorklet.addModule("https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js"),await z(n.audioWorklet),c=await navigator.mediaDevices.getUserMedia({audio:d});const f=n.createMediaStreamSource(c),l=new AudioWorkletNode(n,"raw-audio-processor");return l.port.postMessage({type:"setFormat",format:o,sampleRate:e}),f.connect(v),v.connect(l),await n.resume(),new F(n,v,l,c)}catch(d){var a,t;throw(a=c)==null||a.getTracks().forEach(h=>h.stop()),(t=n)==null||t.close(),d}}constructor(e,o,s,n){this.context=void 0,this.analyser=void 0,this.worklet=void 0,this.inputStream=void 0,this.context=e,this.analyser=o,this.worklet=s,this.inputStream=n}async close(){this.inputStream.getTracks().forEach(e=>e.stop()),await this.context.close()}setMuted(e){this.worklet.port.postMessage({type:"setMuted",isMuted:e})}}const G=V("audio-concat-processor",`
const decodeTable = [0,132,396,924,1980,4092,8316,16764];

export function decodeSample(muLawSample) {
  let sign;
  let exponent;
  let mantissa;
  let sample;
  muLawSample = ~muLawSample;
  sign = (muLawSample & 0x80);
  exponent = (muLawSample >> 4) & 0x07;
  mantissa = muLawSample & 0x0F;
  sample = decodeTable[exponent] + (mantissa << (exponent+3));
  if (sign !== 0) sample = -sample;

  return sample;
}

class AudioConcatProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.buffers = []; // Initialize an empty buffer
    this.cursor = 0;
    this.currentBuffer = null;
    this.wasInterrupted = false;
    this.finished = false;
    
    this.port.onmessage = ({ data }) => {
      switch (data.type) {
        case "setFormat":
          this.format = data.format;
          break;
        case "buffer":
          this.wasInterrupted = false;
          this.buffers.push(
            this.format === "ulaw"
              ? new Uint8Array(data.buffer)
              : new Int16Array(data.buffer)
          );
          break;
        case "interrupt":
          this.wasInterrupted = true;
          break;
        case "clearInterrupted":
          if (this.wasInterrupted) {
            this.wasInterrupted = false;
            this.buffers = [];
            this.currentBuffer = null;
          }
      }
    };
  }
  process(_, outputs) {
    let finished = false;
    const output = outputs[0][0];
    for (let i = 0; i < output.length; i++) {
      if (!this.currentBuffer) {
        if (this.buffers.length === 0) {
          finished = true;
          break;
        }
        this.currentBuffer = this.buffers.shift();
        this.cursor = 0;
      }

      let value = this.currentBuffer[this.cursor];
      if (this.format === "ulaw") {
        value = decodeSample(value);
      }
      output[i] = value / 32768;
      this.cursor++;

      if (this.cursor >= this.currentBuffer.length) {
        this.currentBuffer = null;
      }
    }

    if (this.finished !== finished) {
      this.finished = finished;
      this.port.postMessage({ type: "process", finished });
    }

    return true; // Continue processing
  }
}

registerProcessor("audio-concat-processor", AudioConcatProcessor);
`);class I{static async create({sampleRate:e,format:o}){let s=null;try{s=new AudioContext({sampleRate:e});const c=s.createAnalyser(),a=s.createGain();a.connect(c),c.connect(s.destination),await G(s.audioWorklet);const t=new AudioWorkletNode(s,"audio-concat-processor");return t.port.postMessage({type:"setFormat",format:o}),t.connect(a),await s.resume(),new I(s,c,a,t)}catch(c){var n;throw(n=s)==null||n.close(),c}}constructor(e,o,s,n){this.context=void 0,this.analyser=void 0,this.gain=void 0,this.worklet=void 0,this.context=e,this.analyser=o,this.gain=s,this.worklet=n}async close(){await this.context.close()}}function A(r){return!!r.type}class D{static async create(e){let o=null;try{var s;const c=(s=e.origin)!=null?s:"wss://api.elevenlabs.io",a=e.signedUrl?e.signedUrl:c+"/v1/convai/conversation?agent_id="+e.agentId,t=["convai"];e.authorization&&t.push(`bearer.${e.authorization}`),o=new WebSocket(a,t);const d=await new Promise((g,y)=>{o.addEventListener("open",()=>{var x;const k={type:"conversation_initiation_client_data"};var b,u,m,C;e.overrides&&(k.conversation_config_override={agent:{prompt:(b=e.overrides.agent)==null?void 0:b.prompt,first_message:(u=e.overrides.agent)==null?void 0:u.firstMessage,language:(m=e.overrides.agent)==null?void 0:m.language},tts:{voice_id:(C=e.overrides.tts)==null?void 0:C.voiceId}}),e.customLlmExtraBody&&(k.custom_llm_extra_body=e.customLlmExtraBody),e.dynamicVariables&&(k.dynamic_variables=e.dynamicVariables),(x=o)==null||x.send(JSON.stringify(k))},{once:!0}),o.addEventListener("error",x=>{setTimeout(()=>y(x),0)}),o.addEventListener("close",y),o.addEventListener("message",x=>{const k=JSON.parse(x.data);A(k)&&(k.type==="conversation_initiation_metadata"?g(k.conversation_initiation_metadata_event):console.warn("First received message is not conversation metadata."))},{once:!0})}),{conversation_id:h,agent_output_audio_format:v,user_input_audio_format:f}=d,l=T(f??"pcm_16000"),p=T(v);return new D(o,h,l,p)}catch(c){var n;throw(n=o)==null||n.close(),c}}constructor(e,o,s,n){this.socket=void 0,this.conversationId=void 0,this.inputFormat=void 0,this.outputFormat=void 0,this.queue=[],this.disconnectionDetails=null,this.onDisconnectCallback=null,this.onMessageCallback=null,this.socket=e,this.conversationId=o,this.inputFormat=s,this.outputFormat=n,this.socket.addEventListener("error",c=>{setTimeout(()=>this.disconnect({reason:"error",message:"The connection was closed due to a socket error.",context:c}),0)}),this.socket.addEventListener("close",c=>{this.disconnect(c.code===1e3?{reason:"agent",context:c}:{reason:"error",message:c.reason||"The connection was closed by the server.",context:c})}),this.socket.addEventListener("message",c=>{try{const a=JSON.parse(c.data);if(!A(a))return;this.onMessageCallback?this.onMessageCallback(a):this.queue.push(a)}catch{}})}close(){this.socket.close()}sendMessage(e){this.socket.send(JSON.stringify(e))}onMessage(e){this.onMessageCallback=e,this.queue.forEach(e),this.queue=[]}onDisconnect(e){this.onDisconnectCallback=e,this.disconnectionDetails&&e(this.disconnectionDetails)}disconnect(e){var o;this.disconnectionDetails||(this.disconnectionDetails=e,(o=this.onDisconnectCallback)==null||o.call(this,e))}}function T(r){const[e,o]=r.split("_");if(!["pcm","ulaw"].includes(e))throw new Error(`Invalid format: ${r}`);const s=parseInt(o);if(isNaN(s))throw new Error(`Invalid sample rate: ${o}`);return{format:e,sampleRate:s}}const H={clientTools:{}},J={onConnect:()=>{},onDebug:()=>{},onDisconnect:()=>{},onError:()=>{},onMessage:()=>{},onAudio:()=>{},onModeChange:()=>{},onStatusChange:()=>{},onCanSendFeedbackChange:()=>{}};class L{static async startSession(e){var o;const s=_({},H,J,e);s.onStatusChange({status:"connecting"}),s.onCanSendFeedbackChange({canSendFeedback:!1});let n=null,c=null,a=null,t=null,d=null;if((o=e.useWakeLock)==null||o)try{d=await navigator.wakeLock.request("screen")}catch{}try{var h,v;t=await navigator.mediaDevices.getUserMedia({audio:!0});const b=(h=e.connectionDelay)!=null?h:{default:0,android:3e3};let u=b.default;var f;if(/android/i.test(navigator.userAgent))u=(f=b.android)!=null?f:u;else if(q()){var l;u=(l=b.ios)!=null?l:u}return u>0&&await new Promise(m=>setTimeout(m,u)),c=await D.create(e),[n,a]=await Promise.all([F.create(_({},c.inputFormat,{preferHeadphonesForIosDevices:e.preferHeadphonesForIosDevices})),I.create(c.outputFormat)]),(v=t)==null||v.getTracks().forEach(m=>m.stop()),t=null,new L(s,c,n,a,d)}catch(b){var p,g,y,x;s.onStatusChange({status:"disconnected"}),(p=t)==null||p.getTracks().forEach(u=>u.stop()),(g=c)==null||g.close(),await((y=n)==null?void 0:y.close()),await((x=a)==null?void 0:x.close());try{var k;await((k=d)==null?void 0:k.release()),d=null}catch{}throw b}}constructor(e,o,s,n,c){var a=this;this.options=void 0,this.connection=void 0,this.input=void 0,this.output=void 0,this.wakeLock=void 0,this.lastInterruptTimestamp=0,this.mode="listening",this.status="connecting",this.inputFrequencyData=void 0,this.outputFrequencyData=void 0,this.volume=1,this.currentEventId=1,this.lastFeedbackEventId=1,this.canSendFeedback=!1,this.endSession=()=>this.endSessionWithDetails({reason:"user"}),this.endSessionWithDetails=async function(t){if(a.status==="connected"||a.status==="connecting"){a.updateStatus("disconnecting");try{var d;await((d=a.wakeLock)==null?void 0:d.release()),a.wakeLock=null}catch{}a.connection.close(),await a.input.close(),await a.output.close(),a.updateStatus("disconnected"),a.options.onDisconnect(t)}},this.updateMode=t=>{t!==this.mode&&(this.mode=t,this.options.onModeChange({mode:t}))},this.updateStatus=t=>{t!==this.status&&(this.status=t,this.options.onStatusChange({status:t}))},this.updateCanSendFeedback=()=>{const t=this.currentEventId!==this.lastFeedbackEventId;this.canSendFeedback!==t&&(this.canSendFeedback=t,this.options.onCanSendFeedbackChange({canSendFeedback:t}))},this.onMessage=async function(t){switch(t.type){case"interruption":return t.interruption_event&&(a.lastInterruptTimestamp=t.interruption_event.event_id),void a.fadeOutAudio();case"agent_response":return void a.options.onMessage({source:"ai",message:t.agent_response_event.agent_response});case"user_transcript":return void a.options.onMessage({source:"user",message:t.user_transcription_event.user_transcript});case"internal_tentative_agent_response":return void a.options.onDebug({type:"tentative_agent_response",response:t.tentative_agent_response_internal_event.tentative_agent_response});case"client_tool_call":if(a.options.clientTools.hasOwnProperty(t.client_tool_call.tool_name))try{var d;const h=(d=await a.options.clientTools[t.client_tool_call.tool_name](t.client_tool_call.parameters))!=null?d:"Client tool execution successful.",v=typeof h=="object"?JSON.stringify(h):String(h);a.connection.sendMessage({type:"client_tool_result",tool_call_id:t.client_tool_call.tool_call_id,result:v,is_error:!1})}catch(h){a.onError("Client tool execution failed with following error: "+(h==null?void 0:h.message),{clientToolName:t.client_tool_call.tool_name}),a.connection.sendMessage({type:"client_tool_result",tool_call_id:t.client_tool_call.tool_call_id,result:"Client tool execution failed: "+(h==null?void 0:h.message),is_error:!0})}else{if(a.options.onUnhandledClientToolCall)return void a.options.onUnhandledClientToolCall(t.client_tool_call);a.onError(`Client tool with name ${t.client_tool_call.tool_name} is not defined on client`,{clientToolName:t.client_tool_call.tool_name}),a.connection.sendMessage({type:"client_tool_result",tool_call_id:t.client_tool_call.tool_call_id,result:`Client tool with name ${t.client_tool_call.tool_name} is not defined on client`,is_error:!0})}return;case"audio":return void(a.lastInterruptTimestamp<=t.audio_event.event_id&&(a.options.onAudio(t.audio_event.audio_base_64),a.addAudioBase64Chunk(t.audio_event.audio_base_64),a.currentEventId=t.audio_event.event_id,a.updateCanSendFeedback(),a.updateMode("speaking")));case"ping":return void a.connection.sendMessage({type:"pong",event_id:t.ping_event.event_id});default:return void a.options.onDebug(t)}},this.onInputWorkletMessage=t=>{this.status==="connected"&&this.connection.sendMessage({user_audio_chunk:$(t.data[0].buffer)})},this.onOutputWorkletMessage=({data:t})=>{t.type==="process"&&this.updateMode(t.finished?"listening":"speaking")},this.addAudioBase64Chunk=t=>{this.output.gain.gain.value=this.volume,this.output.worklet.port.postMessage({type:"clearInterrupted"}),this.output.worklet.port.postMessage({type:"buffer",buffer:P(t)})},this.fadeOutAudio=()=>{this.updateMode("listening"),this.output.worklet.port.postMessage({type:"interrupt"}),this.output.gain.gain.exponentialRampToValueAtTime(1e-4,this.output.context.currentTime+2),setTimeout(()=>{this.output.gain.gain.value=this.volume,this.output.worklet.port.postMessage({type:"clearInterrupted"})},2e3)},this.onError=(t,d)=>{console.error(t,d),this.options.onError(t,d)},this.calculateVolume=t=>{if(t.length===0)return 0;let d=0;for(let h=0;h<t.length;h++)d+=t[h]/255;return d/=t.length,d<0?0:d>1?1:d},this.getId=()=>this.connection.conversationId,this.isOpen=()=>this.status==="connected",this.setVolume=({volume:t})=>{this.volume=t},this.setMicMuted=t=>{this.input.setMuted(t)},this.getInputByteFrequencyData=()=>(this.inputFrequencyData!=null||(this.inputFrequencyData=new Uint8Array(this.input.analyser.frequencyBinCount)),this.input.analyser.getByteFrequencyData(this.inputFrequencyData),this.inputFrequencyData),this.getOutputByteFrequencyData=()=>(this.outputFrequencyData!=null||(this.outputFrequencyData=new Uint8Array(this.output.analyser.frequencyBinCount)),this.output.analyser.getByteFrequencyData(this.outputFrequencyData),this.outputFrequencyData),this.getInputVolume=()=>this.calculateVolume(this.getInputByteFrequencyData()),this.getOutputVolume=()=>this.calculateVolume(this.getOutputByteFrequencyData()),this.sendFeedback=t=>{this.canSendFeedback?(this.connection.sendMessage({type:"feedback",score:t?"like":"dislike",event_id:this.currentEventId}),this.lastFeedbackEventId=this.currentEventId,this.updateCanSendFeedback()):console.warn(this.lastFeedbackEventId===0?"Cannot send feedback: the conversation has not started yet.":"Cannot send feedback: feedback has already been sent for the current response.")},this.sendContextualUpdate=t=>{this.connection.sendMessage({type:"contextual_update",text:t})},this.options=e,this.connection=o,this.input=s,this.output=n,this.wakeLock=c,this.options.onConnect({conversationId:o.conversationId}),this.connection.onDisconnect(this.endSessionWithDetails),this.connection.onMessage(this.onMessage),this.input.worklet.port.onmessage=this.onInputWorkletMessage,this.output.worklet.port.onmessage=this.onOutputWorkletMessage,this.updateStatus("connected")}}function j(){return j=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var s in o)({}).hasOwnProperty.call(o,s)&&(r[s]=o[s])}return r},j.apply(null,arguments)}const Z=["micMuted","volume"];function Y(r={}){const{micMuted:e,volume:o}=r,s=function(l,p){if(l==null)return{};var g={};for(var y in l)if({}.hasOwnProperty.call(l,y)){if(p.includes(y))continue;g[y]=l[y]}return g}(r,Z),n=w.useRef(null),c=w.useRef(null),[a,t]=w.useState("disconnected"),[d,h]=w.useState(!1),[v,f]=w.useState("listening");return w.useEffect(()=>{var l;e!==void 0&&(n==null||(l=n.current)==null||l.setMicMuted(e))},[e]),w.useEffect(()=>{var l;o!==void 0&&(n==null||(l=n.current)==null||l.setVolume({volume:o}))},[o]),w.useEffect(()=>()=>{var l;(l=n.current)==null||l.endSession()},[]),{startSession:async l=>{var p;if((p=n.current)!=null&&p.isOpen())return n.current.getId();if(c.current)return(await c.current).getId();try{return c.current=L.startSession(j({},s??{},l??{},{onModeChange:({mode:g})=>{f(g)},onStatusChange:({status:g})=>{t(g)},onCanSendFeedbackChange:({canSendFeedback:g})=>{h(g)}})),n.current=await c.current,e!==void 0&&n.current.setMicMuted(e),o!==void 0&&n.current.setVolume({volume:o}),n.current.getId()}finally{c.current=null}},endSession:async()=>{const l=n.current;n.current=null,await(l==null?void 0:l.endSession())},setVolume:({volume:l})=>{var p;(p=n.current)==null||p.setVolume({volume:l})},getInputByteFrequencyData:()=>{var l;return(l=n.current)==null?void 0:l.getInputByteFrequencyData()},getOutputByteFrequencyData:()=>{var l;return(l=n.current)==null?void 0:l.getOutputByteFrequencyData()},getInputVolume:()=>{var l,p;return(l=(p=n.current)==null?void 0:p.getInputVolume())!=null?l:0},getOutputVolume:()=>{var l,p;return(l=(p=n.current)==null?void 0:p.getOutputVolume())!=null?l:0},sendFeedback:l=>{var p;(p=n.current)==null||p.sendFeedback(l)},getId:()=>{var l;return(l=n.current)==null?void 0:l.getId()},sendContextualUpdate:l=>{var p;(p=n.current)==null||p.sendContextualUpdate(l)},status:a,canSendFeedback:d,micMuted:e,isSpeaking:v==="speaking"}}const K=(r={})=>{const[e,o]=w.useState(!1),[s,n]=w.useState(!1),[c,a]=w.useState(null),[t,d]=w.useState(7),[h,v]=w.useState([]),f=Y({onConnect:()=>{var u;console.log("Connected to Eleven Labs"),o(!0),(u=r.onConnect)==null||u.call(r)},onDisconnect:()=>{var u;console.log("Disconnected from Eleven Labs"),o(!1),a(null),(u=r.onDisconnect)==null||u.call(r)},onMessage:u=>{var m;console.log("Message received:",u),u.source==="user"?v(C=>[...C,{role:"user",content:u.message,timestamp:Date.now()}]):u.source==="ai"&&v(C=>[...C,{role:"assistant",content:u.message,timestamp:Date.now()}]),(m=r.onMessage)==null||m.call(r,u)},onError:u=>{var m;console.error("Conversation error:",u),(m=r.onError)==null||m.call(r,u)}}),{status:l,isSpeaking:p}=f,g=async()=>{try{return await navigator.mediaDevices.getUserMedia({audio:!0}),n(!0),!0}catch(u){return console.error("Error getting microphone permission:",u),n(!1),!1}},y=async u=>{var m,C;try{if(!(s||await g())){alert("Microphone permission is required for the conversation.");return}if(!u.agentId){console.error("Agent ID is required to start a conversation");return}v([]);const N=await f.startSession({agentId:u.agentId});a(N),console.log("Conversation started with ID:",N),(m=u.onStart)==null||m.call(u)}catch(S){console.error("Failed to start conversation:",S),(C=u.onError)==null||C.call(u,S)}},x=async()=>{try{await f.endSession(),console.log("Conversation ended")}catch(u){console.error("Failed to end conversation:",u)}},k=async u=>{try{const m=u.volume/10;await f.setVolume({volume:m}),d(u.volume)}catch(m){console.error("Failed to set volume:",m)}};return{isConnected:e,micPermission:s,conversationId:c,volume:t,status:l,isSpeaking:p,messages:h,startConversation:y,endConversation:x,handleVolumeChange:async u=>{const m=parseInt(u.target.value,10);d(m),await k({volume:m})},adjustVolume:k}};function Q(){const{status:r,isSpeaking:e,conversationId:o,volume:s,messages:n,startConversation:c,endConversation:a,handleVolumeChange:t}=K({}),d=()=>r!=="connected"?"Inactive":e?"Speaking":"Listening",h=async()=>{await c({agentId:"kjp5chENICxrEdmq4GaP"})},v=f=>{const l={target:{value:f.toString()}};t(l)};return i.jsxs("div",{className:"app-container",children:[i.jsxs("div",{className:"main-content",children:[i.jsx(U,{isSpeaking:e}),i.jsxs("div",{className:"control-buttons",children:[i.jsx(E,{onClick:h,disabled:r==="connected"&&o!==null,variant:"primary",icon:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M10 8L16 12L10 16V8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),children:"Start Conversation"}),i.jsx(E,{onClick:a,disabled:r!=="connected"||o===null,variant:"secondary",icon:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("path",{d:"M9 10H15V14H9V10Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),children:"End Conversation"})]}),i.jsx(O,{status:r,agentStatus:d()}),i.jsx(R,{volume:s||7,onChange:v}),i.jsx(W,{messages:n})]}),i.jsxs("div",{className:"footer",children:["© ",new Date().getFullYear()," Courtesy of This Dot Labs"]})]})}function ne(){return i.jsxs(i.Fragment,{children:[i.jsx("meta",{name:"title",content:"Graphs"}),i.jsx(B,{children:i.jsx(Q,{})})]})}export{ne as default};
