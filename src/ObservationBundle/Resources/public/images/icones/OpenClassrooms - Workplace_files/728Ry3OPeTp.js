if (self.CavalryLogger) { CavalryLogger.start_js(["v5owG"]); }

__d("NotificationsTabEnum",[],(function a(b,c,d,e,f,g){f.exports={CONVERSATIONS:"My Conversations",KEYWORDS:"Keywords"};}),null);
__d('NotificationsTabsModel',['fbt','EnterpriseLabsLoggingEvents','EnterpriseLabsTypedLogger'],(function a(b,c,d,e,f,g,h){var i={TABS:{all:h._("All"),myConversations:h._("My Conversations"),keywords:h._("Keywords")},onTabSelectionChanged:function j(){var k=this.props.children[this.getSelectedIndex()].key;new (c('EnterpriseLabsTypedLogger'))().setEntityID('tab:'+k).setEvent(c('EnterpriseLabsLoggingEvents').NT_CLICK_TAB).log();}};f.exports=i;}),null);
__d("XKeywordSubscribeController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/keyword\/controller\/{?keyword_id}\/",{keyword_id:{type:"String"}});}),null);
__d('NotificationTabsController',['cx','React','LogicalGrid.react','NotificationsTabConfig','NotificationsTabsModel','SignalsTab.react','XKeywordSubscribeController'],(function a(b,c,d,e,f,g,h){var i={conversations:'https://our.intern.facebook.com/intern/wiki/IT_Frontpage'+'/Enterprise_Labs/Tabs_for_Notifications/#FAQ',keywords:c('XKeywordSubscribeController').getURIBuilder().getURI()},j={getSizeUnseenState:function k(l){var m={};for(var n in c('NotificationsTabsModel').TABS)m[c('NotificationsTabsModel').TABS[n]]=0;m.All=m.All||0;var o=[];for(var p in l){o.push(l[p].seen_state);if(l[p].seen_state in c('NotificationsTabConfig').notifs_unseen){m.All++;if(!isNaN(m[l[p].notifTab]))m[l[p].notifTab]++;}}return m;},getTabByName:function k(l,m,n,o){var p=m[l]||0;return c('React').createElement(c('SignalsTab.react'),{title:l,key:l,count:p},c('React').createElement(c('LogicalGrid.react'),{component:n},o),c('React').createElement('div',{className:"_57g3"},c('React').createElement('a',{href:i.conversations},'Learn More')));}};f.exports=j;}),null);
__d('NotificationJewelList.react',['cx','fbt','Animation','ErrorBoundary.react','Event','LogicalGrid.react','NotificationListItem.react','NotificationListPropTypes','NotificationsTabConfig','NotificationTabsController','NotificationsTabEnum','NotificationsTabsModel','NotifTestIDs','NotificationVPVs','React','ReactDOM','ScrollableArea.react','SignalsTab.react','SignalsTabGroup.react','Vector','XUISpinner.react','FunnelLogger','NotificationJewelFunnelLoggingConstants','debounce','getObjectValues','isEmpty'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_NAME,m=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_EVENT,n=160,o=530,p=40,q=64,r=430;j=babelHelpers.inherits(s,c('React').Component);k=j&&j.prototype;function s(){var t,u;'use strict';for(var v=arguments.length,w=Array(v),x=0;x<v;x++)w[x]=arguments[x];return u=(t=k.constructor).call.apply(t,[this].concat(w)),this.$NotificationJewelList6=function(){if(!this.$NotificationJewelList1||!this.$NotificationJewelList3)return;var y=c('ReactDOM').findDOMNode(this.$NotificationJewelList1);if(!y)return;var z=c('ReactDOM').findDOMNode(this.$NotificationJewelList3);if(!z)return;var aa=c('NotificationVPVs').getValidatedRectangle(z);if(this.props.afterScroll)this.props.afterScroll(this.$NotificationJewelList4(),y,aa);}.bind(this),this.$NotificationJewelList7=function(){return c('getObjectValues')(this.props.notifs).map(function(y){return JSON.stringify(y);});}.bind(this),this.$NotificationJewelList10=function(){c('FunnelLogger').appendAction(l,m.SCROLL_TO_FETCH);this.$NotificationJewelList6();}.bind(this),u;}s.prototype.$NotificationJewelList4=function(){'use strict';if(!this.$NotificationJewelList2||!this.$NotificationJewelList3)return false;var t=c('ReactDOM').findDOMNode(this.$NotificationJewelList3);if(!t)return false;var u=c('ReactDOM').findDOMNode(this.$NotificationJewelList2);if(!u)return false;var v=c('Vector').getElementDimensions(t).y;if(v===0)return false;var w=c('Vector').getElementPosition(t).y+v,x=c('Vector').getElementPosition(u).y;x-=p;return x<w;};s.prototype.$NotificationJewelList5=function(){'use strict';var t=c('Vector').getViewportDimensions().y,u=Math.min(this.props.maxHeight||o,t-n);if(this.props.upsell)return Math.max(u-q,0);return u;};s.prototype.$NotificationJewelList8=function(t,u){'use strict';var v=void 0;if(!t){v=function x(y){return y;};}else v=function x(y){if(y.notifTab===u)return y;return null;};var w=c('getObjectValues')(this.props.notifs).filter(v).map(function(x){return x.alert_id;});return c('getObjectValues')(this.props.notifs).filter(v).map(function(x,y){var z=x.alert_id,aa=this.$NotificationJewelList9(z,w);return c('React').createElement(c('ErrorBoundary.react'),{key:z},c('React').createElement(c('NotificationListItem.react'),{getDebugData:this.$NotificationJewelList7,isRead:this.props.readState[z],negativeTracking:this.props.negativeTracking,onChevronHide:this.props.onChevronHide,onChevronShow:this.props.onChevronShow,onRead:this.props.onRead,parent:this,paused:this.props.paused,row:aa,rowIndex:y,shortenTimestamp:this.props.shortenTimestamp,visible:!this.props.hiddenState[z],notification:x}));}.bind(this));};s.prototype.componentDidMount=function(){'use strict';if(!this.$NotificationJewelList3)return;var t=c('ReactDOM').findDOMNode(this.$NotificationJewelList3);c('Event').listen(window,'resize',c('debounce')(function(){if(!c('isEmpty')(this.props.notifs))new (c('Animation'))(t).to('height',this.$NotificationJewelList5()+'px').duration(100).go();}.bind(this)));};s.prototype.componentDidUpdate=function(t){'use strict';if(this.props.paused&&!t.paused)if(this.props.shouldScroll&&this.$NotificationJewelList3){var u=this.$NotificationJewelList3.getArea();if(u)u.scrollToTop(false);}setTimeout(this.$NotificationJewelList6,0);};s.prototype.$NotificationJewelList9=function(t,u){'use strict';return u.indexOf(t);};s.prototype.render=function(){'use strict';var t=this.props.notifs,u=null,v=null,w=r,x=null,y=c('React').createElement('ul',{'data-gt':this.props.tracking,'data-testid':c('NotifTestIDs').REACT_NOTIF_LIST});if(!c('isEmpty')(t)){u=c('React').createElement(c('LogicalGrid.react'),{ref:function(ka){return this.$NotificationJewelList1=ka;}.bind(this),component:y},this.$NotificationJewelList8(false,''));v=this.$NotificationJewelList5();}else if(!this.props.canFetchMore)u=c('React').createElement('div',{className:"_572e",'data-testid':c('NotifTestIDs').REACT_NOTIF_LIST},i._("No new notifications"));if(this.props.canFetchMore)x=c('React').createElement(c('XUISpinner.react'),{ref:function(ka){return this.$NotificationJewelList2=ka;}.bind(this),className:"jewelLoading"});var z=null;if(this.props.upsell){var aa=this.props.upsell.module;z=c('React').createElement(aa,this.props.upsell.props);}var ba="_50-t"+(this.props.showingChevron?' '+"_2iy1":''),ca=c('React').createElement(c('ScrollableArea.react'),{ref:function(ka){return this.$NotificationJewelList3=ka;}.bind(this),width:w,height:v,fade:true,persistent:true,onScroll:c('debounce')(this.$NotificationJewelList10,200)},u,x);if(c('NotificationsTabConfig').in_gk_notifications_tab&&c('NotificationsTabConfig').is_work_user){var da=true,ea=this.$NotificationJewelList8(da,c('NotificationsTabEnum').CONVERSATIONS),fa=this.$NotificationJewelList8(da,c('NotificationsTabEnum').KEYWORDS),ga=c('NotificationTabsController').getSizeUnseenState(t),ha=c('NotificationTabsController').getTabByName(c('NotificationsTabsModel').TABS.myConversations,ga,y,ea),ia=c('NotificationTabsController').getTabByName(c('NotificationsTabsModel').TABS.keywords,ga,y,fa),ja=c('NotificationsTabsModel').TABS.all;ca=c('React').createElement(c('SignalsTabGroup.react'),{onSelectionChanged:c('NotificationsTabsModel').onTabSelectionChanged},c('React').createElement(c('SignalsTab.react'),{title:ja,key:ja,count:ga[ja]},ca),ha,ia);}return c('React').createElement('div',{className:ba},ca,z);};s.propTypes=c('NotificationListPropTypes');f.exports=s;}),null);