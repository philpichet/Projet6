if (self.CavalryLogger) { CavalryLogger.start_js(["uB8+O"]); }

__d('SUICardWIPUniform.business',['cssVar','SUITypeStyle'],(function a(b,c,d,e,f,g,h){'use strict';var i={backgroundColor:"#ffffff",borderColor:"#dddfe2",borderRadius:'4px',borderWidth:1,body:{paddingTop:24,paddingBottom:24,paddingLeft:12,paddingRight:12,typeStyle:new (c('SUITypeStyle'))({color:"#4b4f56",fontFamily:"Helvetica, Arial, sans-serif",fontSize:'12px',WebkitFontSmoothing:'subpixel-antialiased'})},footer:{borderTopColor:"#dddfe2",borderTopWidth:1,marginLeft:12,marginRight:12,paddingBottom:12,paddingTop:12,typeStyle:new (c('SUITypeStyle'))({color:"#4b4f56",fontFamily:"Helvetica, Arial, sans-serif",fontSize:'12px',WebkitFontSmoothing:'subpixel-antialiased'})},header:{borderBottomColor:"#dddfe2",borderBottomWidth:1,paddingBottom:12,paddingLeft:12,paddingRight:12,paddingTop:12},status:{backgroundColor:"#f6f7f9",borderTopColor:"#dddfe2",borderTopWidth:1,paddingBottom:12,paddingLeft:12,paddingRight:12,paddingTop:12,typeStyle:new (c('SUITypeStyle'))({color:"#90949c",fontFamily:"Helvetica, Arial, sans-serif",fontSize:'11px',WebkitFontSmoothing:'subpixel-antialiased'})},title:{typeStyle:new (c('SUITypeStyle'))({color:"#4b4f56",fontFamily:"Helvetica, Arial, sans-serif",fontSize:'14px',fontWeight:'bold',textRendering:'optimizelegibility'})}};f.exports=i;}),null);
__d('PagesCoverLiveVideo.react',['React','VideoComponentContextMenu.react','VideoComponentCover.react','VideoComponentDebugOverlay.react','VideoComponentEmbeddedControls.react','VideoComponentErrorOverlay.react','VideoComponentLiveEndScreen.react','VideoComponentLiveInterruptedScreen.react','VideoComponentLiveVideoIndicator.react','VideoComponentPlayButton.react','VideoComponentStreamingReactionTray.react','VideoComponentVolumeStorage.react','VideoComponentWithFallbackMode.react','VideoComponentWithLiveBroadcast.react','VideoDataContainer.react','VideoPlayer.react','VideoPlayerOrigins'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){return c('React').createElement(c('VideoDataContainer.react'),{videoID:this.props.videoID},c('React').createElement(c('VideoPlayer.react'),{videoData:c('VideoDataContainer.react').VIDEO_DATA_PLACEHOLDER,width:this.props.renderedWidth,playerOrigin:c('VideoPlayerOrigins').INTERN,autoplay:true,startMuted:true},c('React').createElement(c('VideoComponentEmbeddedControls.react'),{showSettingsButton:true}),c('React').createElement(c('VideoComponentWithLiveBroadcast.react'),null),c('React').createElement(c('VideoComponentPlayButton.react'),null),c('React').createElement(c('VideoComponentCover.react'),null),c('React').createElement(c('VideoComponentLiveVideoIndicator.react'),null),c('React').createElement(c('VideoComponentDebugOverlay.react'),null),c('React').createElement(c('VideoComponentContextMenu.react'),null),c('React').createElement(c('VideoComponentLiveInterruptedScreen.react'),null),c('React').createElement(c('VideoComponentLiveEndScreen.react'),null),c('React').createElement(c('VideoComponentStreamingReactionTray.react'),null),c('React').createElement(c('VideoComponentVolumeStorage.react'),null),c('React').createElement(c('VideoComponentWithFallbackMode.react'),null),c('React').createElement(c('VideoComponentErrorOverlay.react'),null)));};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d('VideoComponentShowmarkOverlay.react',['ix','cx','fbt','AbstractButton.react','AsyncRequest','Image.react','Layout.react','PopoverMenu.react','React','ReactXUIMenu','VideoShowsLogoUploadDialog.react','XPagesCoverReloadController','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('Layout.react').Column,n=c('Layout.react').FillColumn,o=c('ReactXUIMenu').Item;k=babelHelpers.inherits(p,c('React').Component);l=k&&k.prototype;function p(q){l.constructor.call(this,q);this.$VideoComponentShowmarkOverlay1=function(){this.setState({showEditShowMarkDialog:true});}.bind(this);this.$VideoComponentShowmarkOverlay2=function(){this.setState({showEditShowMarkDialog:false});}.bind(this);this.$VideoComponentShowmarkOverlay3=function(){new (c('AsyncRequest'))().setURI(c('XPagesCoverReloadController').getURIBuilder().setFBID('page_id',this.props.pageID).getURI()).send();this.$VideoComponentShowmarkOverlay2();}.bind(this);this.state={showEditShowMarkDialog:false};}p.prototype.$VideoComponentShowmarkOverlay4=function(){return c('React').createElement(c('Image.react'),{className:"_1o-v",src:this.props.showmarkURL});};p.prototype.$VideoComponentShowmarkOverlay5=function(){if(!this.props.isAdmin)return null;var q=c('React').createElement(c('ReactXUIMenu'),null,c('React').createElement(o,{onClick:this.$VideoComponentShowmarkOverlay1},j._("Change Show Mark"))),r=c('React').createElement(c('Image.react'),{src:h("115342")}),s=j._("Edit Show Mark");return c('React').createElement('div',null,this.state.showEditShowMarkDialog?c('React').createElement(c('VideoShowsLogoUploadDialog.react'),{existingLogoUrl:this.props.showmarkURL,pageID:this.props.pageID,hideDialog:this.$VideoComponentShowmarkOverlay2,onSuccess:this.$VideoComponentShowmarkOverlay3}):null,c('React').createElement('div',{className:"_2210"},c('React').createElement(c('PopoverMenu.react'),{menu:q,position:'below'},c('React').createElement(c('AbstractButton.react'),{className:"_2212",image:r,label:s,labelIsHidden:true,ref:'button',type:'button'}))));};p.prototype.render=function(){return c('React').createElement(c('Layout.react'),{className:"_2213"},c('React').createElement(m,null,this.$VideoComponentShowmarkOverlay4()),c('React').createElement(n,null,this.$VideoComponentShowmarkOverlay5()));};f.exports=p;}),null);