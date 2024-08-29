TMAds={
  htmlPrefix:"__tmad-",
  cssPrefix:"--tmad-",
  id:"container",
  languageCode:"en",
  defaultUuid:"00000",
  appKey:"",
  token:"",
  version:"1.0.2",
  inited: false,
  refreshRate:30,
  videoBannerThreshold:4,
  videoPrepareTimeout:2000,
  refreshTimer:null,
  _checkingAd:false,
  _showingAd:false,
  _checkingInterstitialAd:false,
  _showingInterstitialAd:false,
  _checkingRewardedAd:false,
  _showingRewardedAd:false,
  _checkingRewardedSurvey:false,
  _showingRewardedSurvey:false,
  _overrideUid:"",
  _overrideLanguage:"en",
  _overrideLanguageSet:false,
  _canRegister:true,
  _debugMode:false,
  _canView:true,
  adLoaded:false,
  adExpired:false,
  inlineMode:false,
  currentShowPromise:null,
  currentResolve:null,
  currentReject:null,
  requestTimeout:1000,
  currentIntBlob:null,
  currentRewBlob:null,
  userData:{},
  debugDefaults:{
    base:{
      uuid:"00000",
      title:"Demo Ad",
      subtitle:"For testing purposes only",
      pic:"https://cdn.tmads.xyz/static/demopic.png",
      link:"tmadstestbot/app",
      link_text:"Open",
      video:""
    },
    video:"https://cdn.tmads.xyz/static/demovid.webm",
    survey_data:{questions:[{text:"${intro}",type:0,shuffle:0,answers:[{text:""}]},{text:"${sample_single_select}",type:0,shuffle:0,answers:[{text:"${sample_option} 1"},{text:"${sample_option} 2"},{text:"${sample_option} 3"}]},{text:"${sample_multiple_select}",type:1,shuffle:0,answers:[{text:"${sample_option} 1"},{text:"${sample_option} 2"},{text:"${sample_option} 3"}]}],rules:[]}
  },
  apiEndpoint:"https://tmads.xyz/api/",
  linkBase:"https://t.me/",
  bannerPos:"bottom",
  template:'<div id="{pref}container" class=""><a id="{pref}link" target="_blank" href=""><img id="{pref}pic" src=""></img><span id="{pref}text"><span id="{pref}title">{title}</span><br><span id="{pref}subtitle">{subtitle}</span></span><div id="{pref}button">{link_text}</div><div id="{pref}info"><span></span><svg viewBox="0 0 6.35 6.35" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16"><g transform="translate(-74.431 -114.45)"><path d="m77.606 114.45a3.175 3.175 0 0 0-3.175 3.175 3.175 3.175 0 0 0 3.175 3.175 3.175 3.175 0 0 0 3.175-3.175 3.175 3.175 0 0 0-3.175-3.175zm0 0.58798a2.587 2.587 0 0 1 2.587 2.587 2.587 2.587 0 0 1-2.587 2.587 2.587 2.587 0 0 1-2.587-2.587 2.587 2.587 0 0 1 2.587-2.587zm0.01169 1.0067a0.39106 0.39106 0 0 0-0.39106 0.39106 0.39106 0.39106 0 0 0 0.39106 0.39106 0.39106 0.39106 0 0 0 0.39106-0.39106 0.39106 0.39106 0 0 0-0.39106-0.39106zm0 1.1691c-0.21664 0-0.39106 0.17442-0.39106 0.39106v1.1855c0 0.21664 0.17441 0.39106 0.39106 0.39106s0.39106-0.17442 0.39106-0.39106v-1.1855c0-0.21664-0.17441-0.39106-0.39106-0.39106z" stroke-linecap="round" stroke-width=".51664"></path></g></svg></div></a></div><div id="{pref}fullscreen"><div id="{pref}counter-backdrop"><div id="{pref}ad-mark"><span></span></div><div id="{pref}survey-counter-container"><div id="{pref}survey-counter"><div></div></div></div></div><div id="{pref}counter" class="{pref}counter"><span id="{pref}counter-text"></span></div><div id="{pref}counter-close" class="{pref}counter {pref}left"><span>âœ•</span></div><a id="{pref}fullscreen-link" target="_blank"><video id="{pref}video" playsinline></video><div id="{pref}video-banner"><img></img><p id="{pref}video-banner-title"></p><span id="{pref}video-banner-subtitle"></span><p id="{pref}video-banner-cta"></p></div></a><div id="{pref}survey-container"><div id="{pref}survey-header" class="{pref}survey-block"><div id="{pref}survey-header-padding"></div><p></p></div><div id="{pref}survey-body" class="{pref}survey-block"></div><div id="{pref}survey-footer" class="{pref}survey-block"><input type="button" id="{pref}survey-continue" disabled></input></div></div><div id="{pref}volume" class="{pref}counter {pref}left {pref}bottom {pref}counter-nobg"></div></div>',
  soundOnTemplate:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>',
  soundOffTemplate:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>',
  style:'html{{csspref}banner-height:80px;{csspref}pic-size:60px;{csspref}base-margin:10px;{csspref}info-margin:2px;{csspref}border-radius:8px;{csspref}button-padding:4px;{csspref}counter-size:32px;{csspref}counter-area-height:calc(var({csspref}counter-size) + var({csspref}base-margin) * 2);{csspref}survey-block-max-width:640px;{csspref}survey-header-font-size:32px;{csspref}survey-note-font-size:18px;{csspref}survey-option-padding-left:35px;{csspref}survey-option-margin-bottom:12px;{csspref}survey-option-font-size:22px;{csspref}survey-checkmark-size:26px;{csspref}survey-checkmark-left:10px;{csspref}survey-checkmark-top:6px;{csspref}survey-checkmark-width:5px;{csspref}survey-checkmark-height:10px;{csspref}survey-continue-height:48px;{csspref}survey-continue-margin:8px;{csspref}banner-z:15000;{csspref}fullscreen-z:20000;{csspref}controls-z:25000;{csspref}bg-color:var(--tg-theme-bg-color);{csspref}text-color:var(--tg-theme-text-color);{csspref}secondary-color:var(--tg-theme-hint-color);{csspref}button-color:var(--tg-theme-button-color);{csspref}button-text-color:var(--tg-theme-button-text-color);{csspref}counter-color:#3390ec;{csspref}counter-text-color:#fff;{csspref}backdrop-color:#00000082;{csspref}backdrop-text-color:#ffffff;}.{csspref}bottom{top:calc(var(--tg-viewport-height) - var({csspref}banner-height));}#{pref}container{display:none;position:fixed;top:0;left:0;width:100%;height:var({csspref}banner-height);background:var({csspref}bg-color);font-family:-apple-system,system-ui,"Inter",Roboto,sans-serif;z-index:var({csspref}banner-z);}#{pref}link{display:flex;justify-content:flex-start;align-items:center;flex-direction:row;text-decoration:none;width:100%;height:100%;}#{pref}pic{width:var({csspref}pic-size);height:var({csspref}pic-size);margin-left:var({csspref}base-margin);border-radius:var({csspref}border-radius);}#{pref}text{display:inline-block;line-height:1;max-width:70%;text-overflow:ellipsis;overflow:hidden;margin-left:var({csspref}base-margin);}#{pref}title{color:var({csspref}text-color);text-overflow:ellipsis;overflow:hidden;max-width:100%;display:inline-block;}#{pref}subtitle{font-size:14px;color:var({csspref}secondary-color);}#{pref}button{display:inline-block;background:var({csspref}button-color);color:var({csspref}button-text-color);margin-right:var({csspref}base-margin);margin-left:auto;text-align:center;padding:var({csspref}button-padding);border-radius:var({csspref}border-radius);}#{pref}info{display:none;position:absolute;right:var({csspref}base-margin);top:var({csspref}info-margin);color:var({csspref}secondary-color);align-items:center;}#{pref}info > span{font-size:14px;padding-right:4px;}#{pref}fullscreen{display:none;position:fixed;left:0;top:0;justify-content:center;align-items:center;background:#000;width:calc(100vw - (100vw - 100%));height:calc(100vh - (100vh - 100%));user-select:none;z-index:var({csspref}fullscreen-z);}#{pref}fullscreen-link{display:flex;justify-content:center;align-items:center;width:100%;height:100%;}#{pref}video{width:100%;height:auto;max-height:100%;}.{pref}counter{position:absolute;display:flex;justify-content:center;align-items:center;background:var({csspref}counter-color);color:var({csspref}counter-text-color);width:var({csspref}counter-size);height:var({csspref}counter-size);border-radius:var({csspref}counter-size);margin:var({csspref}base-margin);right:0;top:0;z-index:var({csspref}controls-z);box-shadow:0 0 4px #0006;}.{pref}counter-nobg{background:transparent;box-shadow:none;}.{pref}counter-nobg > svg{color:var({csspref}secondary-color);opacity:0.75;}.{pref}left{right:auto;left:0;}.{pref}bottom{top:auto;bottom:0;}#{pref}counter-close{display:none;cursor:pointer;}#{pref}counter-continue{display:none;}#{pref}counter-backdrop{display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;width:100%;height:var({csspref}counter-area-height);background:#0000;z-index:var({csspref}controls-z);}#{pref}ad-mark{color:var({csspref}counter-text-color);text-shadow:0px 0px 4px #000;}.{pref}fade-in{animation:{pref}anim-fade-in 2s ease 0s 1 normal forwards;}@keyframes {pref}anim-fade-in{0%{opacity:0;}100%{opacity:1;}}#{pref}survey-container{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:var({csspref}bg-color);color:var({csspref}text-color);overflow-x:hidden;overflow-y:auto;justify-content:flex-start;align-items:center;flex-direction:column;user-select:none;}.{pref}survey-block{width:85%;max-width:var({csspref}survey-block-max-width);height:auto;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;}#{pref}survey-header{font-size:var({csspref}survey-header-font-size);}.{pref}survey-note{font-size:var({csspref}survey-note-font-size);color:var({csspref}secondary-color);font-style:italic;}.{pref}survey-option{display:block;position:relative;padding-left:var({csspref}survey-option-padding-left);margin-bottom:var({csspref}survey-option-margin-bottom);cursor:pointer;font-size:var({csspref}survey-option-font-size);width:calc(100% - (var({csspref}survey-checkmark-size) + var({csspref}survey-checkmark-left)));}.{pref}survey-option > input[type="checkbox"], .{pref}survey-option > input[type="radio"]{position:absolute;cursor:pointer;opacity:0;left:0;top:0;}.{pref}checkmark{position:absolute;left:0;top:0;height:var({csspref}survey-checkmark-size);width:var({csspref}survey-checkmark-size);background-color:var({csspref}secondary-color);opacity:0.8;border-radius:var({csspref}border-radius);}.{pref}survey-option:hover input ~ .{pref}checkmark{opacity:1;}.{pref}survey-option input:checked ~ .{pref}checkmark{background:var({csspref}button-color);opacity:1;}.{pref}checkmark:after{content:"";position:absolute;display:none;}.{pref}survey-option input:checked ~ .{pref}checkmark:after{display:block;}.{pref}survey-option input ~ .{pref}checkmark:after{left:var({csspref}survey-checkmark-left);top:var({csspref}survey-checkmark-top);width:var({csspref}survey-checkmark-width);height:var({csspref}survey-checkmark-height);border:solid var({csspref}button-text-color);border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);}.{pref}survey-option input[type="radio"] ~ .{pref}checkmark{border-radius:var({csspref}survey-checkmark-size);}.{pref}survey-option input[type="radio"] ~ .{pref}checkmark:after{border:none;background:var({csspref}button-text-color);border-radius:var({csspref}survey-checkmark-size);width:var(--tmad-survey-checkmark-size);height:var(--tmad-survey-checkmark-size);left:0;top:0;transform:scale(0.65);}#{pref}survey-continue{width:100%;height:var({csspref}survey-continue-height);border:none;border-radius:var({csspref}border-radius);background-color:var({csspref}button-color);color:var({csspref}button-text-color);font-size:var({csspref}survey-option-font-size);margin:var({csspref}survey-continue-margin);cursor:pointer;transition:background-color 0.5s ease;}#{pref}survey-continue:disabled{background-color:var({csspref}secondary-color);cursor:not-allowed;}#{pref}survey-counter-container{display:none;justify-content:center;align-items:center;width:100%;height:var({csspref}counter-area-height);}#{pref}survey-counter{height:calc(var({csspref}counter-size) / 2);width:70%;max-width:var({csspref}survey-block-max-width);background:var({csspref}button-color);border-radius:var({csspref}counter-size);border:2px solid var({csspref}button-color);}#{pref}survey-counter > div{width:0;height:100%;background:var({csspref}button-text-color);border-radius:var({csspref}counter-size);transition:width 0.5s ease;}.{pref}survey-backdrop{opacity:1 !important; background: var({csspref}bg-color) !important;border-bottom:1px solid var({csspref}secondary-color)}#{pref}survey-header-padding{height:var({csspref}counter-area-height);}.{pref}smoothscroll{scroll-behavior:smooth;}.{pref}survey-complete{height:100%;justify-content:center;text-align:center;}.{pref}survey-dropdown{width:100%;padding:var({csspref}survey-checkmark-height);margin-bottom:var({csspref}survey-checkmark-size);background:var({csspref}button-color);color:var({csspref}button-text-color);font-size:var({csspref}survey-option-font-size);text-align:center;}#{pref}video-banner{display:none;position:absolute;left:0;top:0;width:100%;height:100%;justify-content:center;align-items:center;backdrop-filter:blur(8px);background:var({csspref}backdrop-color);flex-direction:column;color:var({csspref}counter-text-color);text-align:center;}#{pref}video-banner > img {width:128px;height:128px;border-radius:var({csspref}border-radius);}#{pref}video-banner-title{font-size:36px;font-weight:700;}#{pref}video-banner-subtitle{font-size:24px;}#{pref}video-banner-cta{font-size:24px;font-weight:700;background:var({csspref}counter-color);padding:var({csspref}button-padding);border-radius:var({csspref}border-radius);width:80%;max-width:var({csspref}survey-block-max-width);}',
  init: function(appKey) {
    if (this.inited===false)
    {
      if (typeof appKey=="string")
      {
        this.appKey=appKey;
        if (Telegram)
        {
          if (Telegram.WebApp)
          {
            if (Telegram.WebApp.initData)
              this.token=Telegram.WebApp.initData;
            if (Telegram.WebApp.initDataUnsafe)
            {
              if (Telegram.WebApp.initDataUnsafe.user)
                this.util.lang.setCode(Telegram.WebApp.initDataUnsafe.user.language_code);
              else
              {
                if (window.navigator)
                  if (window.navigator.language)
                    this._overrideLanguage=window.navigator.language;
                if (this._overrideLanguage.length>2)
                  this._overrideLanguage=this._overrideLanguage.slice(0,2);
                this.util.lang.setCode(this._overrideLanguage);
                this._overrideLanguageSet=true;
              }
            }
          }
        }
      }
      else
      if (typeof appKey=="object") {
        if (typeof appKey.app_key!="string")
        {
          console.log("error: app_key not specified");
          return;
        }
        if (typeof appKey.init_data!="string")
        {
          console.log("error: init_data not specified");
          return;
        }
        if (typeof appKey.init_data_unsafe!="object")
        {
          console.log("error: init_data_unsafe not specified");
          return;
        }
        this.appKey=appKey.app_key;
        this.token=appKey.init_data;
        if (appKey.hasOwnProperty("debug_mode"))
          if (typeof appKey.debug_mode=="boolean")
            this._debugMode=appKey.debug_mode;
        if (typeof appKey.init_data_unsafe.user!="object")
          console.log("error: no user data in init_data_unsafe, might affect TMAds functioning");
        else
          this.util.lang.setCode(appKey.init_data_unsafe.user.language_code || "en");
      }
      else {
        console.log("Error: wrong init param type, should be string or object");
      }
      this.currentAd.parent=this;
      this.colorScheme.parent=this;
      this.timer.parent=this;
      this.util.parent=this;
      this.surveyManager.parent=this;
      this.utilInit();
      this.inited=true;
      this.template=this.template.replaceAll("{pref}",this.htmlPrefix);
      this.surveyManager.optionTemplate=this.surveyManager.optionTemplate.replaceAll("{pref}",this.htmlPrefix);
      this.surveyManager.selectTemplate=this.surveyManager.selectTemplate.replaceAll("{pref}",this.htmlPrefix);
      this.style=this.style.replaceAll("{pref}",this.htmlPrefix).replaceAll("{csspref}",this.cssPrefix);
      this.util.addStyle(this.style);
      document.body.insertAdjacentHTML("beforeend",this.template);
      this.util.q("#"+this.htmlPrefix+"info > svg").addEventListener("click",function(e){
        if (e.stopPropagation) {
          e.stopPropagation();
          e.preventDefault();
        }
        e.cancelBubble=true;
        e.returnValue=false;
        return false;
      },true);
      this.surveyManager.init();
      this.util.id(this.htmlPrefix+"link").addEventListener("click",function(){
        TMAds.register();
      });
      this.util.id(this.htmlPrefix+"fullscreen-link").addEventListener("click",function(){
        TMAds.register();
      });
      /*this.util.id(this.htmlPrefix+"video").addEventListener("loadeddata",function(){
        if (this.readyState>=3)
        {
          TMAds.util.startTimer(Math.round(this.duration),TMAds.util.id(TMAds.htmlPrefix+"counter-text"),false,function(){});
          TMAds.view();
          this.play();
        }
      });*/
      this.util.id(this.htmlPrefix+"video").addEventListener("error",function(){
        TMAds.util.clearTimer();
        TMAds.util.hidePlayer();
        if (TMAds._showingInterstitialAd) {
          TMAds._showingInterstitialAd=false;
          TMAds.callbacks.onInterstitialAdShowFail();
        }
        else
        if (TMAds._showingRewardedAd) {
          TMAds._showingRewardedAd=false;
          TMAds.callbacks.onRewardedAdShowFail();
        }
      });
      this.util.id(this.htmlPrefix+"counter-close").addEventListener("click",function(){
        if (TMAds._showingRewardedAd || TMAds._showingRewardedSurvey) {
          try {
            Telegram.WebApp.showConfirm(TMAds.util.lang.get(TMAds._showingRewardedSurvey ? "survey_confirm" : "rewarded_confirm"),function(ok){
              if (ok)
              {
                TMAds.util.failClose();
              }
            });
          }catch(e){
            TMAds.util.failClose();
          }
        }
        else
        {
          TMAds.util.closeAd();
        }
      });
      this.util.id(this.htmlPrefix+"volume").innerHTML=this.soundOnTemplate;
      this.util.id(this.htmlPrefix+"volume").addEventListener("click",function(){
        try {
          var _vid=TMAds.util.id(TMAds.htmlPrefix+"video");
          _vid.muted=(_vid.muted===false) ? true : false;
          this.innerHTML=_vid.muted===false ? TMAds.soundOnTemplate : TMAds.soundOffTemplate;
        }catch(e){}
      });
    }
  },
  setDebugMode: function(debugMode) {
    if (this.inited===false)
      this._debugMode=debugMode;
  },
  checkAd: function(){
    if (this._checkingAd===false)
    {
      this._checkingAd=true;
      var _body={
        body:{
          app_key:this.appKey,
          token:this.token,
          user_data:this.userData
        }
      };
      if (this._overrideLanguageSet)
        _body.body.lang_code=this._overrideLanguage;
      if (this._overrideUid!="")
        _body.body.tg_id=this._overrideUid;
      if (this._debugMode)
      {
        var _res=Object.assign({},this.debugDefaults.base);
        _body.debugResponse={ok:true,result:_res};
      }
      this.util.request({
        method:"get",
        options:_body
      })
      .then(ad=>{
        TMAds._checkingAd=false;
        TMAds.adExpired=false;
        TMAds.currentAd.set(ad.result);
        /*TMAds.refreshTimer=setTimeout(function(){
          TMAds.adExpired=true;
          if (TMAds._showingAd)
            TMAds.checkAd();
        },1000*TMAds.refreshRate);*/
        if (TMAds._showingAd===false)
        {
          TMAds.adLoaded=true;
          TMAds.show();
        }
      })
      .catch(e=>{
        TMAds._checkingAd=false;
        TMAds.adLoaded=false;
        if (TMAds._showingAd===false)
        {
          TMAds.callbacks.onAdLoadFail();
        }
        console.log("Error while getting an ad: "+JSON.stringify(e));
      });
    }
  },
  show: function(bannerPos){
    var _allowed=["top","bottom"];
    var _cont=this.util.id(this.htmlPrefix+"container");
    if (bannerPos)
      if (_allowed.indexOf(bannerPos)>=0)
        this.bannerPos=bannerPos;
    _cont.style.top=(this.bannerPos=="bottom" ? "calc(var(--tg-viewport-height) - var(--tmad-banner-height))" : 0);
    if (this._showingAd===false)
    {
      if (this.adLoaded==false || this.adExpired)
        this.checkAd();
      else
      {
        _cont.style.display="block";
        setTimeout(function(){TMAds.callbacks.onAdLoadSuccess({banner_height:TMAds.util.id(TMAds.htmlPrefix+"container").clientHeight,banner_position:TMAds.bannerPos});},100);
        this._showingAd=true;
      }
    }
  },
  hide: function(){
    this.util.id(this.htmlPrefix+"container").style.display="none";
    this._showingAd=false;
  },
  checkInterstitialAd: function(){
    return new Promise(function(resolve,reject) {
      if (TMAds._checkingInterstitialAd===false)
      {
        TMAds._checkingInterstitialAd=true;
        var _body={
          body: {
            app_key:TMAds.appKey,
            token:TMAds.token,
            type: 1,
            user_data:TMAds.userData
          }
        };
        if (TMAds._overrideLanguageSet)
          _body.body.lang_code=TMAds._overrideLanguage;
        if (TMAds._overrideUid!="")
          _body.body.tg_id=TMAds._overrideUid;
        if (TMAds._debugMode)
        {
          var _res=Object.assign({},TMAds.debugDefaults.base);
          _res.video=TMAds.debugDefaults.video;
          _body.debugResponse={ok:true,result:_res};
        }
        TMAds.util.request({
          method:"get",
          options:_body
        })
        .then(ad=>{
          TMAds.currentInterstitialAd.set(ad.result);
          var _vid=TMAds.util.id(TMAds.htmlPrefix+"video");
          _vid.src=ad.result.video;
          _vid.onloadeddata=function(){
            if (this.readyState>=3) {
              if (TMAds._showingInterstitialAd===true)
              {
                TMAds.showInterstitialAd();
              }
              TMAds._checkingInterstitialAd=false;
              resolve();
              TMAds.callbacks.onInterstitialAdLoadSuccess();
            }
          }
        })
        .catch(e=>{
          TMAds._checkingInterstitialAd=false;
          if (TMAds._showingInterstitialAd)
            TMAds._showingInterstitialAd=false;
          reject();
          //if (TMAds._showingInterstitialAd===false)
          {
            TMAds.callbacks.onInterstitialAdLoadFail();
          }
          var _vid=TMAds.util.id(TMAds.htmlPrefix+"video");
          _vid.onloadeddata=function(){};
          console.log("Error while getting an interstitial ad: "+JSON.stringify(e));
        });
      }
      else {
        reject();
      }
    });
  },
  showInterstitialAd: function(){
    try{Telegram.WebApp.expand();}catch(e){}
    return new Promise(function(resolve,reject) {
      if ((TMAds._showingInterstitialAd==false && TMAds._showingRewardedAd==false && TMAds._showingRewardedSurvey==false) || (TMAds._showingInterstitialAd==true && TMAds._checkingInterstitialAd==true))
      {
        TMAds._showingInterstitialAd=true;
        if (TMAds.currentInterstitialAd.get().hasOwnProperty("video")) {
          /*setTimeout(function(){*/TMAds.util.showPlayer(TMAds.currentInterstitialAd.get());/*},TMAds.videoPrepareTimeout);*/
          TMAds.currentShowPromise=new Promise(function(resolve,reject){
            TMAds.currentResolve=resolve;
            TMAds.currentReject=reject;
          }).then(e=>{resolve();}).catch(e=>{reject();});
        }
        else
          TMAds.checkInterstitialAd().then(e=>{
            TMAds.currentShowPromise=new Promise(function(resolve,reject){
              TMAds.currentResolve=resolve;
              TMAds.currentReject=reject;
            }).then(e=>{resolve();}).catch(e=>{reject();});
          })
          .catch(e=>{
            TMAds._showingInterstitialAd=false;
            reject();
          });
      }
      else
        reject();
    });
  },
  checkRewardedAd: function(){
    return new Promise(function(resolve,reject) {
      if (TMAds._checkingRewardedAd===false)
      {
        TMAds._checkingRewardedAd=true;
        var _body={
          body:{
            app_key:TMAds.appKey,
            token:TMAds.token,
            type: 2,
            user_data:TMAds.userData
          }
        };
        if (TMAds._overrideLanguageSet)
          _body.body.lang_code=TMAds._overrideLanguage;
        if (TMAds._overrideUid!="")
          _body.body.tg_id=TMAds._overrideUid;
        if (TMAds._debugMode)
        {
          var _res=Object.assign({},TMAds.debugDefaults.base);
          _res.video=TMAds.debugDefaults.video;
          _body.debugResponse={ok:true,result:_res};
        }
        TMAds.util.request({
          method:"get",
          options:_body
        })
        .then(ad=>{
          TMAds.currentRewardedAd.set(ad.result);
          var _vid=TMAds.util.id(TMAds.htmlPrefix+"video");
          _vid.src=ad.result.video;
          _vid.onloadeddata=function(){
            if (this.readyState>=3) {
              if (TMAds._showingRewardedAd===true)
              {
                TMAds.showRewardedAd();
              }
              TMAds._checkingRewardedAd=false;
              resolve();
              TMAds.callbacks.onRewardedAdLoadSuccess();
            }
          }
        })
        .catch(e=>{
          TMAds._checkingRewardedAd=false;
          if (TMAds._showingRewardedAd)
            TMAds._showingRewardedAd=false;
          reject();
          //if (TMAds._showingRewardedAd===false)
          {
            TMAds.callbacks.onRewardedAdLoadFail();
          }
          console.log("Error while getting a rewarded ad: "+JSON.stringify(e));
        });
      }
      else {
        reject();
      }
    });
  },
  showRewardedAd: function(){
    try{Telegram.WebApp.expand();}catch(e){}
    return new Promise(function(resolve,reject) {
      if ((TMAds._showingInterstitialAd==false && TMAds._showingRewardedAd==false && TMAds._showingRewardedSurvey==false) || (TMAds._showingRewardedAd==true && TMAds._checkingRewardedAd==true))
      {
        TMAds._showingRewardedAd=true;
        if (TMAds.currentRewardedAd.get().hasOwnProperty("video")) {
          TMAds.util.showPlayer(TMAds.currentRewardedAd.get());
          TMAds.currentShowPromise=new Promise(function(resolve,reject){
            TMAds.currentResolve=resolve;
            TMAds.currentReject=reject;
          }).then(e=>{resolve();}).catch(e=>{reject();});
        }
        else
          TMAds.checkRewardedAd().then(e=>{
            TMAds.currentShowPromise=new Promise(function(resolve,reject){
              TMAds.currentResolve=resolve;
              TMAds.currentReject=reject;
            }).then(e=>{resolve();}).catch(e=>{reject();});
          })
          .catch(e=>{
            TMAds._showingRewardedAd=false;
            reject();
          });
      }
      else
        reject();
    });
  },
  checkRewardedSurvey: function(){
    return new Promise(function(resolve,reject) {
      if (TMAds._checkingRewardedSurvey===false)
      {
        TMAds._checkingRewardedSurvey=true;
        var _body={
          body:{
            app_key:TMAds.appKey,
            token:TMAds.token,
            type: 3,
            user_data:TMAds.userData
          }
        };
        if (TMAds._overrideLanguageSet)
          _body.body.lang_code=TMAds._overrideLanguage;
        if (TMAds._overrideUid!="")
          _body.body.tg_id=TMAds._overrideUid;
        if (TMAds._debugMode)
        {
          var _res=Object.assign({},TMAds.debugDefaults.base);
          _res.survey_data=TMAds.debugDefaults.survey_data;
          _body.debugResponse={ok:true,result:_res};
        }
        TMAds.util.request({
          method:"get",
          options:_body
        })
        .then(ad=>{
          TMAds.currentRewardedSurvey.set(ad.result);
          if (TMAds._showingRewardedSurvey===true)
          {
            TMAds.showRewardedSurvey();
          }
          TMAds._checkingRewardedSurvey=false;
          resolve();
          //else
            TMAds.callbacks.onRewardedSurveyLoadSuccess();
        })
        .catch(e=>{
          TMAds._checkingRewardedSurvey=false;
          if (TMAds._showingRewardedSurvey)
            TMAds._showingRewardedSurvey=false;
          reject();
          //if (TMAds._showingRewardedSurvey===false)
          {
            TMAds.callbacks.onRewardedSurveyLoadFail();
          }
          console.log("Error while getting a rewarded survey: "+JSON.stringify(e));
        });
      }
      else {
        reject();
      }
    });
  },
  showRewardedSurvey: function(){
    try{Telegram.WebApp.expand();}catch(e){}
    return new Promise(function(resolve,reject) {
      if ((TMAds._showingInterstitialAd==false && TMAds._showingRewardedAd==false && TMAds._showingRewardedSurvey==false) || (TMAds._showingRewardedSurvey==true && TMAds._checkingRewardedSurvey==true))
      {
        TMAds._showingRewardedSurvey=true;
        if (TMAds.currentRewardedSurvey.get().hasOwnProperty("survey_data")) {
          TMAds.util.showSurveyPlayer();
          TMAds.currentShowPromise=new Promise(function(resolve,reject){
            TMAds.currentResolve=resolve;
            TMAds.currentReject=reject;
          }).then(e=>{resolve();}).catch(e=>{reject();});
        }
        else
          TMAds.checkRewardedSurvey().then(e=>{
            TMAds.currentShowPromise=new Promise(function(resolve,reject){
              TMAds.currentResolve=resolve;
              TMAds.currentReject=reject;
            }).then(e=>{resolve();}).catch(e=>{reject();});
          })
          .catch(e=>{
            TMAds._showingRewardedSurvey=false;
            reject();
          });
      }
      else
        reject();
    });
  },
  setUserData: function(data){
    this.userData=Object.assign(this.userData,data);
  },
  currentAd: {
    val: {},
    get: function(){return this.val;},
    set: function(newval){
      this.val=newval;
      try {
        this.parent.util.id(this.parent.htmlPrefix+"link").href=((this.val.link.indexOf("https://")==-1 && this.val.link.indexOf("http://")==-1) ? this.parent.linkBase : "")+this.val.link;
        this.parent.util.id(this.parent.htmlPrefix+"pic").src=this.val.pic;
        this.parent.util.id(this.parent.htmlPrefix+"title").innerHTML=this.val.title;
        this.parent.util.id(this.parent.htmlPrefix+"subtitle").innerHTML=this.val.subtitle;
        this.parent.util.id(this.parent.htmlPrefix+"button").innerHTML=this.val.link_text;
        this.parent.util.q("#"+this.parent.htmlPrefix+"info > span").innerHTML=TMAds.util.lang.get("ad")+(this.val.age_mark ? " | "+this.val.age_mark : "");
      }catch(e){console.log(e);}
    }
  },
  currentInterstitialAd: {
    val:{},
    get: function(){return this.val;},
    set: function(newval){
      if (typeof(newval)=="object")
        this.val=newval;
    }
  },
  currentRewardedAd: {
    val:{},
    get: function(){return this.val;},
    set: function(newval){
      if (typeof(newval)=="object")
        this.val=newval;
    }
  },
  currentRewardedSurvey: {
    val:{},
    get: function(){return this.val;},
    set: function(newval){
      if (typeof(newval)=="object")
        this.val=newval;
    }
  },
  colorScheme: {
    val: {},
    get: function(){return this.val;},
    set: function(newval){
      if (typeof newval=="object")
      {
        this.val=newval;
        var _allowed=["bg-color","text-color","secondary-color","button-color","button-text-color"];
        var _names=Object.getOwnPropertyNames(this.val);
        var _tmp;
        for (var i=0; i<_names.length; i++) {
          _tmp=_names[i].replaceAll("_","-");
          if (_allowed.indexOf(_tmp)>=0)
            document.documentElement.style.setProperty(this.parent.cssPrefix+_tmp,this.val[_names[i]]);
        }
      }
    }
  },
  setTheme: function(obj){
    this.colorScheme.set(obj);
  },
  timer: {
    seconds: 0,
    target: null,
    callback: null,
    interval: null,
    skippable: false,
    skipThreshold: 5,
    skipThresholdDefault: 5
  },
  registerTimer: null,
  register: function(){
    if (this._canRegister)
    {
      this._canRegister=false;
      this.registerTimer=setTimeout(function(){TMAds._canRegister=true;},3000);
      var _body={
        app_key:this.appKey,
        token:this.token,
        ad_id:(this._showingRewardedAd ? this.currentRewardedAd.get() : (this._showingInterstitialAd ? this.currentInterstitialAd.get() : this.currentAd.get())).uuid
      };
      if (this._overrideLanguageSet)
        _body.lang_code=this._overrideLanguage;
      if (this._overrideUid!="")
        _body.tg_id=this._overrideUid;
      if (!this._debugMode)
      {
        this.util.request({
          method:"click",
          options:{
            body:_body
          }
        })
        .then(ad=>{
        })
        .catch(e=>{
        });
      }
    }
  },
  view: function(){
    if (this._canView)
    {
      this._canView=false;
      var _body={
        app_key:this.appKey,
        token:this.token,
        ad_id:(this._showingRewardedAd ? this.currentRewardedAd.get() : (this._showingInterstitialAd ? this.currentInterstitialAd.get() : this.currentAd.get())).uuid,
        type: (this._showingRewardedAd ? 200 : 1)
      };
      if (this._overrideLanguageSet)
        _body.lang_code=this._overrideLanguage;
      if (this._overrideUid!="")
        _body.tg_id=this._overrideUid;
      if (!this._debugMode)
      {
        this.util.request({
          method:"view",
          options:{
            body:_body
          }
        })
        .then(ad=>{
        })
        .catch(e=>{
        });
      }
    }
  },
  callbacks:{
    onAdLoadSuccess: function(){
      console.log("ad load success");
    },
    onAdLoadFail: function(){
      console.log("ad load fail");
    },
    onInterstitialAdLoadSuccess: function(){
      console.log("interstitial ad load success");
    },
    onInterstitialAdLoadFail: function(){
      console.log("interstitial ad load fail");
    },
    onInterstitialAdShowSuccess: function(){
      console.log("interstitial ad show success");
    },
    onInterstitialAdShowFail: function(){
      console.log("interstitial ad show fail");
    },
    onRewardedAdLoadSuccess: function(){
      console.log("rewarded ad load success");
    },
    onRewardedAdLoadFail: function(){
      console.log("rewarded ad load fail");
    },
    onRewardedAdShowSuccess: function(){
      console.log("rewarded ad show success");
    },
    onRewardedAdShowFail: function(){
      console.log("rewarded ad show fail");
    },
    onRewardedSurveyLoadSuccess: function(){
      console.log("rewarded survey load success");
    },
    onRewardedSurveyLoadFail: function(){
      console.log("rewarded survey load fail");
    },
    onRewardedSurveySuccess: function(){
      console.log("rewarded survey success");
    },
    onRewardedSurveyFail: function(){
      console.log("rewarded survey fail");
    }
  },
  addCallback: function(name,callback){
    if (this.callbacks.hasOwnProperty(name) && typeof callback=="function")
      this.callbacks[name]=callback;
  },
  removeCallback: function(name){
    if (this.callbacks.hasOwnProperty(name))
      this.callbacks[name]=function(){};
  },
  utilInit: function() {
    /*try {
      if (Telegram.WebApp.initDataUnsafe.hasOwnProperty("user"))
        this.util.lang.setCode(Telegram.WebApp.initDataUnsafe.user.language_code);
    }catch(e){}*/
    if (!String.prototype.replaceAll) {
    	String.prototype.replaceAll = function(str, newStr){
    		if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
    			return this.replace(str, newStr);
    		}
    		return this.replace(new RegExp(str, 'g'), newStr);
    	};
    }
  },
  util: {
    id: function(id) {
      return document.getElementById(id);
    },
    q: function(q) {
      return document.querySelector(q);
    },
    qAll: function(q) {
      return document.querySelectorAll(q);
    },
    addStyle: function(css) {
      var style=document.createElement("style");
      style.textContent=css;
      document.head.append(style);
    },
    request: function(params) {
    	return new Promise((resolve, reject) => {
        if (params.options.hasOwnProperty("debugResponse"))
          resolve(params.options.debugResponse);
        else {
      		var xhr = new XMLHttpRequest();
      		var contentTypeIsSet = false;
      		params.options = params.options || {};
          params.options.body=params.options.body || {};
          params.options.body.v=TMAds.version;
          if (params.hasOwnProperty("http")==false)
            params.http="POST";
      		xhr.open(params.http, params.hasOwnProperty("url") ? params.url : this.parent.apiEndpoint+params.method);
      		for (var header in params.options.headers) {
      			if ({}.hasOwnProperty.call(options.headers, header)) {
      				header = header.toLowerCase();
      				contentTypeIsSet = header === 'content-type' ? true : contentTypeIsSet;
      				xhr.setRequestHeader(header, options.headers[header]);
      			}
      		}
      		if (!contentTypeIsSet) {
      			xhr.setRequestHeader('Content-type', 'application/json');
      		}
      		xhr.onload = function() {
      			if (xhr.status >= 200 && xhr.status < 300) {
      				var response;
      				try {
      					response = JSON.parse(xhr.response);
      				} catch (e) {
      					response = xhr.response;
      				}
      				resolve(response);
      			} else {
      				reject({
      					status: xhr.status,
      					statusText: xhr.statusText,
      				});
      			}
      		};
          xhr.onerror=function(){
            reject();
          };
          xhr.ontimeout=function(){
            reject();
          };
          xhr.timeout=TMAds.requestTimeout;
      		xhr.send(JSON.stringify(params.options.body));
        }
    	});
    },
    getMediaBlob: function(url) {
    	return new Promise((resolve, reject) => {
      		var xhr = new XMLHttpRequest();
      		xhr.open("GET",url);
      		xhr.onload = function() {
      			if (xhr.status >= 200 && xhr.status < 300) {
      				resolve(xhr.response);
      			} else {
      				reject({
      					status: xhr.status,
      					statusText: xhr.statusText,
      				});
      			}
      		};
          xhr.onerror=function(){
            reject();
          };
          xhr.ontimeout=function(){
            reject();
          };
          xhr.timeout=TMAds.requestTimeout;
          xhr.responseType="blob";
      		xhr.send();
    	});
    },
    startTimer: function(seconds,targetEl,skippable,callback){
      this.parent.timer.seconds=seconds+this.parent.videoBannerThreshold;
      this.parent.timer.skippable=skippable;
      if (targetEl)
        targetEl.innerHTML=seconds+TMAds.videoBannerThreshold;
      this.parent.timer.target=targetEl;
      clearInterval(this.parent.timer.interval);
      if (callback)
        this.parent.timer.callback=callback;
      this.parent.timer.interval=setInterval(function(){
        if (TMAds.timer.seconds>1) {
          TMAds.timer.seconds--;
          if (TMAds.timer.target)
            TMAds.timer.target.innerHTML=TMAds.timer.seconds;
          if (TMAds.timer.seconds<TMAds.videoBannerThreshold && TMAds.util.id(TMAds.htmlPrefix+"video-banner").style.display=="none")
          {
            TMAds.util.id(TMAds.htmlPrefix+"video-banner").style.display="flex";
            TMAds.util.id(TMAds.htmlPrefix+"volume").style.display="none";
          }
          if (TMAds.timer.skipThreshold>0)
          {
            TMAds.timer.skipThreshold--;
            if (TMAds.timer.skipThreshold==0 && !TMAds.inlineMode && !TMAds._showingRewardedAd)
            {
              var _cb=TMAds.util.id(TMAds.htmlPrefix+"counter-close");
              _cb.style.display="flex";
              _cb.classList.add(TMAds.htmlPrefix+"fade-in");
            }
          }
        }
        else {
          clearInterval(TMAds.timer.interval);
          TMAds.util.closeAd();
          if (typeof TMAds.timer.callback=="function")
            TMAds.timer.callback();
        }
      },1000);
    },
    clearTimer: function(){
      clearInterval(this.parent.timer.interval);
      this.parent.timer.callback=null;
      this.parent.timer.skipThreshold=this.parent.timer.skipThresholdDefault;
    },
    showPlayer: function(obj){
      try{Telegram.WebApp.expand();}catch(e){}
      var _cb=TMAds.util.id(TMAds.htmlPrefix+"counter-close");
      _cb.style.display="none";
      _cb.classList.remove(TMAds.htmlPrefix+"fade-in");
      TMAds.util.id(TMAds.htmlPrefix+"counter").style.display="flex";
      TMAds.util.id(TMAds.htmlPrefix+"counter-text").innerHTML="...";
      this.id(this.parent.htmlPrefix+"fullscreen-link").href=((obj.link.indexOf("https://")==-1 && obj.link.indexOf("http://")==-1) ? this.parent.linkBase : "")+obj.link;
      this.id(this.parent.htmlPrefix+"fullscreen").style.display="flex";
      var _vid=this.id(this.parent.htmlPrefix+"video");
      TMAds.util.startTimer(Math.round(_vid.duration),TMAds.util.id(TMAds.htmlPrefix+"counter-text"),false,function(){});
      TMAds.view();
      _vid.play();
      /*_vid.src=obj.video;
      _vid.load();*/
      _vid.muted=false;
      var _vol=this.id(this.parent.htmlPrefix+"volume");
      _vol.style.display="flex";
      _vol.innerHTML=this.parent.soundOnTemplate;
      this.id(this.parent.htmlPrefix+"video-banner").style.display="none";
      this.q("#"+this.parent.htmlPrefix+"video-banner > img").src=obj.pic;
      this.id(this.parent.htmlPrefix+"video-banner-title").innerHTML=obj.title;
      this.id(this.parent.htmlPrefix+"video-banner-subtitle").innerHTML=obj.subtitle;
      this.id(this.parent.htmlPrefix+"video-banner-cta").innerHTML=obj.link_text;
      this.q("#"+this.parent.htmlPrefix+"ad-mark").style.display="flex";
      this.q("#"+this.parent.htmlPrefix+"ad-mark > span").innerHTML=this.lang.get("ad")+(obj.age_mark ? " | "+obj.age_mark : "");
    },
    hidePlayer: function(){
      this.id(this.parent.htmlPrefix+"fullscreen").style.display="none";
      this.id(this.parent.htmlPrefix+"video").pause();
      this.parent._canView=true;
    },
    showSurveyPlayer: function(){
      try{Telegram.WebApp.expand();}catch(e){}
      var _cb=TMAds.util.id(TMAds.htmlPrefix+"counter-close");
      if (!TMAds.inlineMode)
        _cb.style.display="flex";
      _cb.classList.remove(TMAds.htmlPrefix+"fade-in");
      TMAds.util.id(this.parent.htmlPrefix+"fullscreen").style.display="flex";
      TMAds.util.id(TMAds.htmlPrefix+"survey-container").style.display="flex";
      TMAds.util.id(TMAds.htmlPrefix+"survey-counter-container").style.display="flex";
      TMAds.util.id(TMAds.htmlPrefix+"counter-backdrop").classList.add(TMAds.htmlPrefix+"survey-backdrop");
      TMAds.util.id(TMAds.htmlPrefix+"counter").style.display="none";
      TMAds.util.id(TMAds.htmlPrefix+"counter-close").classList.remove(TMAds.htmlPrefix+"left");
      this.id(this.parent.htmlPrefix+"volume").style.display="none";
      this.q("#"+this.parent.htmlPrefix+"ad-mark").style.display="none";
      TMAds.surveyManager.startSurvey();
    },
    hideSurveyPlayer: function(){
      TMAds.util.id(this.parent.htmlPrefix+"fullscreen").style.display="none";
      TMAds.util.id(TMAds.htmlPrefix+"survey-container").style.display="none";
      TMAds.util.id(TMAds.htmlPrefix+"survey-counter-container").style.display="none";
      TMAds.util.id(TMAds.htmlPrefix+"counter-backdrop").classList.remove(TMAds.htmlPrefix+"survey-backdrop");
      TMAds.util.id(TMAds.htmlPrefix+"counter-close").classList.add(TMAds.htmlPrefix+"left");
    },
    closeAd: function(){
      TMAds.currentResolve();
      if (!TMAds.inlineMode)
      {
        if (TMAds._showingInterstitialAd) {
          TMAds.util.hidePlayer();
          TMAds.util.clearTimer();
          TMAds.currentInterstitialAd.set({});
          TMAds._showingInterstitialAd=false;
          TMAds.callbacks.onInterstitialAdShowSuccess();
        }
        else
        if (TMAds._showingRewardedAd) {
          TMAds.util.hidePlayer();
          TMAds.util.clearTimer();
          TMAds.currentRewardedAd.set({});
          TMAds._showingRewardedAd=false;
          TMAds.callbacks.onRewardedAdShowSuccess();
        }
        else
        if (TMAds._showingRewardedSurvey) {
          TMAds.util.hideSurveyPlayer();
          TMAds.currentRewardedSurvey.set({});
          TMAds._showingRewardedSurvey=false;
          TMAds.callbacks.onRewardedSurveySuccess();
        }
      }
      else
      {
        TMAds.util.sendInlineData(TMAds._showingRewardedSurvey ? "TMAdsSurveyEvent" : "TMAdsVideoEvent");
      }
    },
    lang: {
      languageCode:"en",
      get: function(id){
        return (this.texts[this.languageCode].hasOwnProperty(id) ? this.texts[this.languageCode][id] : "???");
      },
      setCode: function(code){
        if (this.texts.hasOwnProperty(code))
          this.languageCode=code;
      },
      texts:{
        en:{
          ad:"Ad",
          rewarded_confirm:"Close ad? You will lose your reward.",
          survey_confirm:"Close survey? You will lose your reward.",
          yes:"Yes",
          no:"No",
          survey_continue:"Continue",
          survey_complete:"Thanks for completing this survey!",
          survey_timer:"This popup will close in {secs}...",
          survey_note_single:"Pick one option",
          survey_note_multiple:"Pick at least one option",
          survey_select_default:"Tap to select...",
          survey_def_sex_select:"Select your gender",
          survey_def_sex_male:"Male",
          survey_def_sex_female:"Female",
          survey_def_age_select:"Select your age",
          survey_def_intro:"Complete a short survey and get a reward!",
          survey_def_sample_single_select:"This is a single-select question",
          survey_def_sample_multiple_select:"This is a multi-select question",
          survey_def_sample_option:"Option",
        },
        ru:{
          ad:"Ð ÐµÐºÐ»Ð°Ð¼Ð°",
          rewarded_confirm:"Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ Ñ€ÐµÐºÐ»Ð°Ð¼Ñƒ? Ð’Ñ‹ Ð¿Ð¾Ñ‚ÐµÑ€ÑÐµÑ‚Ðµ Ð½Ð°Ð³Ñ€Ð°Ð´Ñƒ.",
          survey_confirm:"Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ Ð¾Ð¿Ñ€Ð¾Ñ? Ð’Ñ‹ Ð¿Ð¾Ñ‚ÐµÑ€ÑÐµÑ‚Ðµ Ð½Ð°Ð³Ñ€Ð°Ð´Ñƒ.",
          yes:"Ð”Ð°",
          no:"ÐÐµÑ‚",
          survey_continue:"ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ",
          survey_complete:"Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾ Ð·Ð° Ð¿Ñ€Ð¾Ñ…Ð¾Ð¶Ð´ÐµÐ½Ð¸Ðµ Ð¾Ð¿Ñ€Ð¾ÑÐ°!",
          survey_timer:"Ð­Ñ‚Ð¾ Ð¾ÐºÐ½Ð¾ Ð·Ð°ÐºÑ€Ð¾ÐµÑ‚ÑÑ Ñ‡ÐµÑ€ÐµÐ· {secs}...",
          survey_note_single:"Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð¾Ð´Ð¸Ð½ Ð¾Ñ‚Ð²ÐµÑ‚",
          survey_note_multiple:"Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ñ…Ð¾Ñ‚Ñ Ð±Ñ‹ Ð¾Ð´Ð¸Ð½ Ð¾Ñ‚Ð²ÐµÑ‚",
          survey_select_default:"ÐÐ°Ð¶Ð¼Ð¸Ñ‚Ðµ Ð´Ð»Ñ Ð²Ñ‹Ð±Ð¾Ñ€Ð°...",
          survey_def_sex_select:"Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð²Ð°Ñˆ Ð¿Ð¾Ð»",
          survey_def_sex_male:"ÐœÑƒÐ¶ÑÐºÐ¾Ð¹",
          survey_def_sex_female:"Ð–ÐµÐ½ÑÐºÐ¸Ð¹",
          survey_def_age_select:"Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð²Ð°Ñˆ Ð²Ð¾Ð·Ñ€Ð°ÑÑ‚",
          survey_def_intro:"ÐŸÑ€Ð¾Ð¹Ð´Ð¸Ñ‚Ðµ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¸Ð¹ Ð¾Ð¿Ñ€Ð¾Ñ Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚Ðµ Ð½Ð°Ð³Ñ€Ð°Ð´Ñƒ!",
          survey_def_sample_single_select:"Ð­Ñ‚Ð¾ Ð²Ð¾Ð¿Ñ€Ð¾Ñ Ñ Ð²Ñ‹Ð±Ð¾Ñ€Ð¾Ð¼ Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚Ð° Ð¾Ñ‚Ð²ÐµÑ‚Ð°",
          survey_def_sample_multiple_select:"Ð­Ñ‚Ð¾ Ð²Ð¾Ð¿Ñ€Ð¾Ñ Ñ Ð¼Ð½Ð¾Ð¶ÐµÑÑ‚Ð²ÐµÐ½Ð½Ñ‹Ð¼ Ð²Ñ‹Ð±Ð¾Ñ€Ð¾Ð¼",
          survey_def_sample_option:"Ð’Ð°Ñ€Ð¸Ð°Ð½Ñ‚",
        }
      }
    },
    shuffle: function(arr){
      var _c=arr.length, _r;
      while (_c!=0) {
        _r=Math.floor(Math.random()*_c);
        _c--;
        [arr[_c],arr[_r]]=[arr[_r],arr[_c]];
      }
      return arr;
    },
    shuffleExt: function(arr,options) {
      if (!options) options={};
      var from=Math.max(options.from || 0,0);
    	var to=Math.max((options.to+1) || arr.length,0);
    	var reverse=options.reverse || false;
    	var _temparr=arr.slice(from,to);
    	_temparr=reverse ? _temparr.reverse() : this.shuffle(_temparr);
    	_temparr=arr.slice(0,from).concat(_temparr.concat(arr.slice(to,arr.length)));
    	return _temparr;
    },
    handleShuffle: function(array,option) {
      switch (option)
    	{
    		case 1:
    			array=this.shuffle(array);
    		break;
    		case 2:
    			array=this.shuffleArray(array,{from:0,to:array.length-2});
    		break;
    		case 3:
    			array=this.shuffleArray(array,{from:0,to:array.length-3});
    		break;
    		case 4:
    			array=this.shuffleArray(array,{from:1});
    		break;
    		case 5:
    			array=this.shuffleArray(array,{from:2});
    		break;
    		case 6:
    			array=this.shuffleArray(array,{from:1,to:array.length-2});
    		break;
    		case 7:
    			array=this.shuffleArray(array,{reverse:true});
    		break;
    		case 8:
    			array=this.shuffleArray(array,{reverse:true,to:array.length-2});
    		break;
    		case 9:
    			array=this.shuffleArray(array,{reverse:true,to:array.length-3});
    		break;
    		case 10:
    			array=this.shuffleArray(array,{from:1,to:array.length-3});
    		default: break;
    	}
    	return array;
    },
    failClose: function() {
      if (TMAds._showingRewardedAd) {
        TMAds.util.hidePlayer();
        TMAds.util.clearTimer();
        TMAds.currentRewardedAd.set({});
        TMAds._showingRewardedAd=false;
        TMAds.currentReject();
        TMAds.callbacks.onRewardedAdShowFail();
      }
      else
      if (TMAds._showingRewardedSurvey) {
        TMAds.util.hideSurveyPlayer();
        TMAds.currentRewardedSurvey.set({});
        TMAds._showingRewardedSurvey=false;
        TMAds.currentReject();
        TMAds.callbacks.onRewardedSurveyFail();
      }
    },
    sendInlineData: function(data){
      try {
        Telegram.WebApp.sendData(data);
      }catch(e){}
    }
  },
  surveyManager: {
    optionTemplate:'<label class="{pref}survey-option">{text}<input type="{type}" name="{pref}survey-option-name" value="{value}"><span class="{pref}checkmark"></span></label>',
    selectTemplate:'<select class="{pref}survey-dropdown"></select>',
    currentState:{},
    defaultState:{
      survey_data:{},
      surveyIndex:-1,
      answers:[],
      lastAnswer:[],
      screenedOut:false
    },
    timer: {
      seconds: 3,
      target: null,
      interval: null,
      secondsDefault: 3
    },
    init: function() {
      this.currentState=this.defaultState;
      var _contBut=this.parent.util.id(this.parent.htmlPrefix+"survey-continue");
      _contBut.value=this.parent.util.lang.get("survey_continue");
      _contBut.onclick=function(){TMAds.surveyManager.nextQuestion();};
      this.parent.util.id(this.parent.htmlPrefix+"survey-body").addEventListener("click",function(e){
        if (e.target.matches("."+TMAds.htmlPrefix+"survey-option") || e.target.matches("."+TMAds.htmlPrefix+"checkmark"))
          setTimeout(function(){TMAds.surveyManager.checkCurrentAnswer();},100);
      });
    },
    clearOptions: function(){
      this.parent.util.id(this.parent.htmlPrefix+"survey-body").innerHTML="";
    },
    addOption: function(text,type,value){
      var _allowedTypes=["radio","checkbox"];
      if (_allowedTypes.indexOf(type)==-1) return false;
      this.parent.util.id(this.parent.htmlPrefix+"survey-body").insertAdjacentHTML("beforeend",this.optionTemplate.replaceAll("{text}",text).replaceAll("{type}",type).replaceAll("{value}",value));
    },
    getCurrentAnswer: function(){
      var _result=[];
      var _opts;
      switch (this.currentState.survey_data.questions[this.currentState.surveyIndex].type)
      {
        case 0:
        case 1:
          _opts=this.parent.util.qAll("."+this.parent.htmlPrefix+"survey-option > input:checked");
          for (var i=0; i<_opts.length; i++)
            _result.push(parseInt(_opts[i].value));
        break;
        case 2:
          _opts=this.parent.util.q("."+this.parent.htmlPrefix+"survey-dropdown");
          if (_opts)
            if (!isNaN(parseInt(_opts.value)))
              _result.push(parseInt(_opts.value));
        break;
        default:
        break;
      }
      return _result;
    },
    checkCurrentAnswer: function(){
      this.currentState.lastAnswer=this.currentState.answers[this.currentState.surveyIndex];
      this.currentState.answers[this.currentState.surveyIndex]=this.getCurrentAnswer();
      if (this.currentState.lastAnswer.length==0 && this.currentState.answers[this.currentState.surveyIndex].length>0 && this.currentState.survey_data.questions[this.currentState.surveyIndex].type==0)
      {
        var _survCont=this.parent.util.id(this.parent.htmlPrefix+"survey-container");
        _survCont.classList.add(this.parent.htmlPrefix+"smoothscroll");
        _survCont.scrollTop=_survCont.scrollTopMax;
      }
      this.parent.util.id(this.parent.htmlPrefix+"survey-continue").disabled=this.getCurrentAnswer().length==0;
    },
    spawnQuestion: function(obj){
      this.currentState.lastAnswer=[];
      this.parent.util.q("#"+this.parent.htmlPrefix+"survey-header > p").innerHTML=this.populateText(obj.text)+"<br><span class="+this.parent.htmlPrefix+"survey-note>"+this.parent.util.lang.get((obj.type==0 || obj.type==2) ? "survey_note_single" : "survey_note_multiple")+"</span>";
      this.clearOptions();
      var _type=(obj.type==0 ? "radio" : "checkbox");
      var i;
      switch(obj.type)
      {
        case 0:
        case 1:
          var _order=[];
          for (i=0; i<obj.answers.length; i++)
            _order.push(i);
          _order=this.parent.util.handleShuffle(_order,obj.shuffle || 0);
          for (i=0; i<obj.answers.length; i++)
            this.addOption(this.populateText(obj.answers[_order[i]].text),_type,_order[i]);
          if (obj.type==0 && obj.answers.length==1)
          {
            this.parent.util.q("."+this.parent.htmlPrefix+"survey-option > input").checked=true;
            this.parent.util.q("."+this.parent.htmlPrefix+"survey-option").style.display="none";
            this.parent.util.q("."+this.parent.htmlPrefix+"survey-note").style.display="none";
            this.checkCurrentAnswer();
          }
        break;
        case 2:
          this.parent.util.id(this.parent.htmlPrefix+"survey-body").insertAdjacentHTML("beforeend",this.selectTemplate);
          var _min=parseInt(obj.answers[0].text);
          var _max=parseInt(obj.answers[1].text);
          var _abs;
          if (!isNaN(_min) && !isNaN(_max))
          {
            var _sel=this.parent.util.q("#"+this.parent.htmlPrefix+"survey-body > select");
            _sel.insertAdjacentHTML("beforeend",'<option value="">'+this.parent.util.lang.get("survey_select_default")+'</option>');
            _abs=_max-_min;
            for (i=0; i<_abs+1; i++)
              _sel.insertAdjacentHTML("beforeend","<option value="+(_min+i)+">"+(_min+i)+"</option>");
            _sel.addEventListener("change",function(){
              TMAds.surveyManager.checkCurrentAnswer();
            });
          }
        break;
        default:
        break;
      }
      this.checkCurrentAnswer();
      var _survCont=this.parent.util.id(this.parent.htmlPrefix+"survey-container");
      _survCont.classList.remove(this.parent.htmlPrefix+"smoothscroll");
      _survCont.scrollTop=0;
    },
    startSurvey: function(){
      this.currentState=Object.assign({},this.defaultState);
      this.currentState.survey_data=this.parent.currentRewardedSurvey.get().survey_data;
      var i;
      for (i=0; i<this.currentState.survey_data.questions.length; i++) {
        this.currentState.answers.push([]);
      }
      this.parent.util.id(this.parent.htmlPrefix+"survey-header-padding").style.display="block";
      this.parent.util.id(this.parent.htmlPrefix+"survey-header").classList.remove(this.parent.htmlPrefix+"survey-complete");
      this.parent.util.id(this.parent.htmlPrefix+"survey-body").style.display="flex";
      this.parent.util.id(this.parent.htmlPrefix+"survey-footer").style.display="flex";
      this.nextQuestion();
    },
    nextQuestion: function(){
      var _redirect=this.checkRules();
      if (_redirect==-1)
        this.currentState.surveyIndex=this.currentState.surveyIndex+1;
      else
      if (_redirect<=-2)
      {
        this.currentState.surveyIndex=this.currentState.survey_data.questions.length;
        if (_redirect==-3)
            this.currentState.screenedOut=true;
      }
      else
        this.currentState.surveyIndex=_redirect;
      var _end=this.currentState.surveyIndex>=this.currentState.survey_data.questions.length;
      this.progressBar(_end ? 100 : (this.currentState.surveyIndex+1)/(this.currentState.survey_data.questions.length+1)*100);
      if (!_end)
        this.spawnQuestion(this.currentState.survey_data.questions[this.currentState.surveyIndex]);
      else {
        this.completeSurvey();
      }
    },
    completeSurvey: function(){
      this.parent.util.id(this.parent.htmlPrefix+"survey-header-padding").style.display="none";
      this.parent.util.id(this.parent.htmlPrefix+"counter-close").style.display="none";
      this.parent.util.id(this.parent.htmlPrefix+"survey-header").classList.add(this.parent.htmlPrefix+"survey-complete");
      this.parent.util.id(this.parent.htmlPrefix+"survey-body").style.display="none";
      this.parent.util.id(this.parent.htmlPrefix+"survey-footer").style.display="none";
      this.parent.util.q("#"+this.parent.htmlPrefix+"survey-header > p").innerHTML=this.parent.util.lang.get("survey_complete")+"<br><br>"+this.parent.util.lang.get("survey_timer").replace("{secs}","<span>"+this.timer.secondsDefault+"</span>");
      if (this.parent.currentRewardedSurvey.get().uuid!=this.parent.defaultUuid)
        this.sendAnswers();
      this.timer.seconds=this.timer.secondsDefault;
      this.timer.target=this.parent.util.q("#"+this.parent.htmlPrefix+"survey-header > p > span");
      this.timer.interval=setInterval(function(){
        if (TMAds.surveyManager.timer.seconds>1) {
          TMAds.surveyManager.timer.seconds--;
          if (TMAds.surveyManager.timer.target)
            TMAds.surveyManager.timer.target.innerHTML=TMAds.surveyManager.timer.seconds;
        }
        else {
          clearInterval(TMAds.surveyManager.timer.interval);
          TMAds.util.closeAd();
        }
      },1000);
    },
    sendAnswers: function() {
      var _id=this.parent.currentRewardedSurvey.get().uuid;
      var _body={
        app_key:this.parent.appKey,
        token:this.parent.token,
        ad_id:_id,
        answers:this.currentState.answers,
        screened_out:this.currentState.screenedOut ? 1 : 0
      };
      if (this.parent._overrideLanguageSet)
        _body.lang_code=this.parent._overrideLanguage;
      if (this.parent._overrideUid!="")
        _body.tg_id=this.parent._overrideUid;
      if (!this.parent._debugMode)
      {
        this.parent.util.request({
          method:"answer",
          options:{
            body:_body
          }
        })
        .then(ad=>{
        })
        .catch(e=>{
        });
      }
    },
    populateText: function(str) {
      return str.replace(/\${\w+}/g, function(all) {
          return TMAds.util.lang.get("survey_def_"+all.replace("${","").replace("}",""));
      });
    },
    checkRules: function(){
    	var qObj=null;
    	var _defaultResult=-1;
    	var i,j,k,_ansArr,_condArr,_compArr,_compVal,l,l0,l1;
    	if (this.currentState.survey_data.rules)
    	{
    		for (i=0; i<this.currentState.survey_data.rules.length; i++)
    		{
    			if (this.currentState.survey_data.rules[i].question_id==this.currentState.surveyIndex)
    			{
    				qObj=this.currentState.survey_data.rules[i];
    				break;
    			}
    		}
    		if (qObj==null) return _defaultResult;
    		for (i=0; i<qObj.list_of_rules.length; i++)
    		{
    			_condArr=[];
    			for (j=0; j<qObj.list_of_rules[i].list_of_conditions.length; j++)
    			{
    				_compArr=[];
            _ansArr=this.currentState.answers[qObj.list_of_rules[i].list_of_conditions[j].question_id];
            _compVal="comparison_int_value";
    				for (k=0; k<qObj.list_of_rules[i].list_of_conditions[j].list_of_comparisons.length; k++)
    				{
    					if (qObj.list_of_rules[i].list_of_conditions[j].list_of_comparisons[k].comparison_element_id==-1)
    					{
    						l0=0;
    						l1=_ansArr.length;
    					}
    					else
    					{
    						l0=qObj.list_of_rules[i].list_of_conditions[j].list_of_comparisons[k].comparison_element_id;
    						l1=qObj.list_of_rules[i].list_of_conditions[j].list_of_comparisons[k].comparison_element_id+1;
    					}
    					for (l=l0; l<l1; l++)
    					{
    						_compArr.push(this.redirectCond((qObj.list_of_rules[i].list_of_conditions[j].list_of_comparisons[k].comparison_element_id==-2 ? _ansArr.length : _ansArr[l]),qObj.list_of_rules[i].list_of_conditions[j].list_of_comparisons[k][_compVal],qObj.list_of_rules[i].list_of_conditions[j].list_of_comparisons[k].comparison_type));
    					}
    				}
    				_condArr.push(this.checkArrOfBools(_compArr,qObj.list_of_rules[i].list_of_conditions[j].comparison_keyword));
    			}
    			if (this.checkArrOfBools(_condArr,qObj.list_of_rules[i].condition_keyword))
    				return qObj.list_of_rules[i].redirect;
    		}
    		return qObj.redirect_default;
    	}
    	return _defaultResult;
    },
    checkArrOfBools: function(arr,operator)
    {
    	if (arr.length==0) return false;
    	var _res=false;
    	switch (operator)
    	{
    		case "and":	_res=(arr.every(Boolean)); break;
    		case "or":
    			for (var i=0; i<arr.length; i++)
    			{
    				if (arr[i]==true)
    				{
    					_res=true;
    					break;
    				}
    			}
    		break;
    		default:
    		break;
    	}
    	return _res;
    },
    redirectCond: function(val,target,cond) {
    	try {
    		var _res=false;
    		switch (cond)
    		{
    			case "equals": _res=(val==target); break;
    			case "not_equals": _res=(val!=target); break;
    			case "lesser": _res=(val<target); break;
    			case "lesser_or_equal": _res=(val<=target); break;
    			case "greater": _res=(val>target); break;
    			case "greater_or_equal": _res=(val>=target); break;
    			case "contains": _res=(val.toLowerCase().includes(target.toLowerCase())); break;
    			case "not_contains": _res=(!(val.toLowerCase().includes(target.toLowerCase()))); break;
    			default: break;
    		}
    		return _res;
    	} catch(e){return false;}
    },
    progressBar: function(perc) {
      if (typeof perc!="number") return false;
      perc=Math.min(Math.max(perc,0),100);
      this.parent.util.q("#"+this.parent.htmlPrefix+"survey-counter > div").style.width=perc+"%";
    }
  }
};
