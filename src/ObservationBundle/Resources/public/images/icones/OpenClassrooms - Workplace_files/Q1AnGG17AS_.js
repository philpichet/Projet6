if (self.CavalryLogger) { CavalryLogger.start_js(["IhoiU"]); }

__d("ComposedLinkEntityProperties",[],(function a(b,c,d,e,f,g){f.exports={URL:"url",SHIMMED_URL:"shimmedURL",HOVERCARD_ENDPOINT:"hovercard_endpoint"};}),null);
__d('FBClipboardLink.react',['cx','fbt','Clipboard','DOMContainer.react','Event','React','ReactDOM','SubscriptionsHandler','Tooltip.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.state={copied:false,supported:c('Clipboard').isSupported()},this.$FBClipboardLink1=null,this.$FBClipboardLink2=null,this.$FBClipboardLink4=function(s){if(s.clipboardData){s.clipboardData.setData('text/html',this.props.value);s.preventDefault();}}.bind(this),this.$FBClipboardLink5=function(){if(!this.state.supported)return 'Unsupported in this browser';if(this.state.copied)return this.props.tooltipSuccess;return this.props.tooltip;}.bind(this),this.$FBClipboardLink3=function(){if(this.$FBClipboardLink2){clearTimeout(this.$FBClipboardLink2);this.$FBClipboardLink2=null;}}.bind(this),this.$FBClipboardLink7=function(){this.$FBClipboardLink2=setTimeout(this.$FBClipboardLink8,this.props.tooltipSuccessDuration);}.bind(this),this.$FBClipboardLink6=function(event){var s=c('ReactDOM').findDOMNode(this.refs.root),t=c('Clipboard').copy(this.props.value,s);this.$FBClipboardLink3();this.setState({copied:true,supported:t});this.$FBClipboardLink7();this.props.onComplete&&this.props.onComplete(t);}.bind(this),this.$FBClipboardLink8=function(){this.$FBClipboardLink3();this.setState({copied:false});}.bind(this),o;}m.prototype.componentWillUnmount=function(){'use strict';this.$FBClipboardLink3();if(this.$FBClipboardLink1)this.$FBClipboardLink1.release();};m.prototype.componentDidMount=function(){'use strict';if(this.props.type==='html'){var n=c('ReactDOM').findDOMNode(this);this.$FBClipboardLink1=new (c('SubscriptionsHandler'))();this.$FBClipboardLink1.addSubscriptions(c('Event').listen(n,'copy',this.$FBClipboardLink4));}};m.prototype.render=function(){'use strict';var n=c('joinClasses')(this.props.className,"_xd6"),o=this.props.children||this.props.label;if(!o&&this.props.childrenDONOTUSE)o=c('React').createElement(c('DOMContainer.react'),null,this.props.childrenDONOTUSE);return c('React').createElement(c('Tooltip.react'),babelHelpers['extends']({},this.props,{ref:'root',className:n,tooltip:this.$FBClipboardLink5(),'data-pitloot-persistonclick':true,onClick:this.$FBClipboardLink6,position:this.props.position,alignH:this.props.alignment}),c('React').createElement('div',{ref:'content',className:"_xd7"},o));};m.propTypes={type:l.string,label:l.node,value:l.node.isRequired,tooltip:l.node,tooltipSuccess:l.node,tooltipSuccessDuration:l.number,onComplete:l.func,position:l.oneOf(['above','below','left','right']),alignment:l.oneOf(['left','center','right'])};m.defaultProps={tooltip:i._("Copy Text to Clipboard"),tooltipSuccess:i._("Text Copied to Clipboard"),tooltipSuccessDuration:1000,type:'string'};f.exports=m;}),null);
__d('AbstractDraggableItem.react',['cssVar','cx','CenteredContainer.react','DOMDimensions','Draggable','Event','FBOverlayContainer.react','FBOverlayElement.react','Keys','React','ReactDOM','Rect','getScrollPosition','getViewportDimensions'],(function a(b,c,d,e,f,g,h,i){var j,k,l=parseInt("1024px",10),m=250;j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;n.prototype.componentDidMount=function(){'use strict';this.$AbstractDraggableItem2=c('ReactDOM').findDOMNode(this.refs.dragHandle);this.$AbstractDraggableItem3=c('ReactDOM').findDOMNode(this);this.$AbstractDraggableItem5(this.props.item.isMovable);};n.prototype.componentWillUnmount=function(){'use strict';this.$AbstractDraggableItem5(false);};n.prototype.componentWillReceiveProps=function(o){'use strict';this.$AbstractDraggableItem2=c('ReactDOM').findDOMNode(this.refs.dragHandle);this.$AbstractDraggableItem3=c('ReactDOM').findDOMNode(this);this.$AbstractDraggableItem5(o.item.isMovable);};n.prototype.render=function(){'use strict';var o=this.props.item,p=null;if(this.props.item.actionButton)p=c('React').createElement(c('FBOverlayElement.react'),{horizontal:'right',vertical:'fit'},this.props.item.actionButton);return c('React').createElement(c('FBOverlayContainer.react'),{className:this.getRootClassName(),key:o.id,style:{width:this.state.width}},o.label,this.getDragIcon(),this.getDragHandle(),p);};function n(o){'use strict';k.constructor.call(this,o);this.$AbstractDraggableItem6=function(){if(this.state.dragging)return;this.$AbstractDraggableItem4=c('Event').listen(document,'keydown',function(r){if(r.keyCode===c('Keys').ESC){this.$AbstractDraggableItem9();r.preventDefault();}}.bind(this));var p=c('DOMDimensions').getElementDimensions(this.$AbstractDraggableItem3),q=p.width;this.setState({dragging:true,width:q});this.props.onGrab(this.props.item.id,this.$AbstractDraggableItem3);}.bind(this);this.$AbstractDraggableItem7=function(){var p=this.$AbstractDraggableItem3.parentNode,q=new (c('Rect'))(p),r=c('getViewportDimensions')(),s=c('getScrollPosition')(window),t=Math.max(r.width,l),u=new (c('Rect'))(s.y,Math.min(t,q.r+m),r.height+s.y,Math.max(0,q.l-m));this.$AbstractDraggableItem1&&this.$AbstractDraggableItem1.setBoundingBox(u);this.props.onDrag();}.bind(this);this.$AbstractDraggableItem8=function(){this.$AbstractDraggableItem10();this.props.onDrop();}.bind(this);this.state={dragging:false,width:null};}n.prototype.getDragIcon=function(){'use strict';if(!this.props.item.isMovable)return null;return c('React').createElement(c('FBOverlayElement.react'),{horizontal:'left',vertical:'fit'},c('React').createElement(c('CenteredContainer.react'),{horizontal:false,vertical:true},c('React').createElement('div',{className:"_58zl"})));};n.prototype.getDragHandle=function(){'use strict';return c('React').createElement(c('FBOverlayElement.react'),{horizontal:'left',ref:'dragHandle',vertical:'fit'},c('React').createElement('div',{className:"_58zn"}));};n.prototype.getRootClassName=function(){'use strict';return (this.props.item.isMovable?"_58zo":'')+(this.state.dragging?' '+"_58zp":'')+(' '+"_58z_")+(!this.props.item.isMovable?' '+"_58-6":'')+(' '+"_58-8");};n.prototype.$AbstractDraggableItem5=function(o){'use strict';var p=this.$AbstractDraggableItem1;if(o&&!p){this.$AbstractDraggableItem1=new (c('Draggable'))(this.$AbstractDraggableItem3).setNamespace('AbstractDraggableList').setUseAbsolute(true).setGrabHandler(this.$AbstractDraggableItem6).setDragHandler(this.$AbstractDraggableItem7).setDropHandler(this.$AbstractDraggableItem8).addHandle(this.$AbstractDraggableItem2);}else if(!o&&p){if(p.active)this.$AbstractDraggableItem9();p.destroy();this.$AbstractDraggableItem1=null;}};n.prototype.$AbstractDraggableItem9=function(){'use strict';this.$AbstractDraggableItem1&&this.$AbstractDraggableItem1.killDrag();this.$AbstractDraggableItem10();this.props.onCancelDrag();};n.prototype.$AbstractDraggableItem10=function(){'use strict';this.$AbstractDraggableItem1&&this.$AbstractDraggableItem1.resetPosition();this.setState({dragging:false,width:null});this.$AbstractDraggableItem4&&this.$AbstractDraggableItem4.remove();delete this.$AbstractDraggableItem4;};f.exports=n;}),null);
__d('ImageStyles',['LayoutStyles'],(function a(b,c,d,e,f,g){'use strict';var h=babelHelpers['extends']({},c('LayoutStyles'),{backgroundColor:true,borderBottomLeftRadius:true,borderBottomRightRadius:true,borderColor:true,borderRadius:true,borderTopLeftRadius:true,borderTopRightRadius:true,borderWidth:true,height:true,opacity:true,overflow:true,width:true});f.exports=h;}),null);
__d('Image',['cx','ImageStyles','React','Image.react','getValidatedStyle'],(function a(b,c,d,e,f,g,h){'use strict';function i(j){var k=j.children,l=j.source,m=j.style,n=c('getValidatedStyle')(m,c('ImageStyles'));return c('React').createElement(c('Image.react'),{className:"_b5a",src:l,style:n,onClick:j.onClick},k);}f.exports=i;}),null);
__d('DialogFitHeightToContent',['AbstractDialogFitHeight'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('AbstractDialogFitHeight'));i=h&&h.prototype;j.prototype.getHeightProperty=function(){'use strict';return 'max-height';};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('getRangeBoundingClientRect',['getRangeClientRects'],(function a(b,c,d,e,f,g){'use strict';function h(i){var j=c('getRangeClientRects')(i),k=0,l=0,m=0,n=0;if(j.length){if(j.length>1&&j[0].width===0){var o=j[1];k=o.top;l=o.right;m=o.bottom;n=o.left;}else{var p=j[0];k=p.top;l=p.right;m=p.bottom;n=p.left;}for(var q=1;q<j.length;q++){var r=j[q];if(r.height!==0&&r.width!==0){k=Math.min(k,r.top);l=Math.max(l,r.right);m=Math.max(m,r.bottom);n=Math.min(n,r.left);}}}return {top:k,right:l,bottom:m,left:n,width:l-n,height:m-k};}f.exports=h;}),null);
__d('getVisibleSelectionRect',['getRangeBoundingClientRect'],(function a(b,c,d,e,f,g){'use strict';function h(i){var j=i.getSelection();if(!j.rangeCount)return null;var k=j.getRangeAt(0),l=c('getRangeBoundingClientRect')(k),m=l.top,n=l.right,o=l.bottom,p=l.left;if(m===0&&n===0&&o===0&&p===0)return null;return l;}f.exports=h;}),null);
__d('adjustBlockDepthForContentState',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k,l){var m=j.getStartKey(),n=j.getEndKey(),o=i.getBlockMap(),p=o.toSeq().skipUntil(function(q,r){return r===m;}).takeUntil(function(q,r){return r===n;}).concat([[n,o.get(n)]]).map(function(q){var r=q.getDepth()+k;r=Math.max(0,Math.min(r,l));return q.set('depth',r);});o=o.merge(p);return i.merge({blockMap:o,selectionBefore:j,selectionAfter:j});}f.exports=h;}),null);
__d('RichTextEditorUtil',['DraftModifier','EditorState','SelectionState','adjustBlockDepthForContentState','nullthrows'],(function a(b,c,d,e,f,g){'use strict';var h={currentBlockContainsLink:function i(j){var k=j.getSelection(),l=j.getCurrentContent(),m=l.getEntityMap();return l.getBlockForKey(k.getAnchorKey()).getCharacterList().slice(k.getStartOffset(),k.getEndOffset()).some(function(n){var o=n.getEntity();return !!o&&m.__get(o).getType()==='LINK';});},getCurrentBlockType:function i(j){var k=j.getSelection();return j.getCurrentContent().getBlockForKey(k.getStartKey()).getType();},getDataObjectForLinkURL:function i(j){return {url:j.toString()};},handleKeyCommand:function i(j,k){switch(k){case 'bold':return h.toggleInlineStyle(j,'BOLD');case 'italic':return h.toggleInlineStyle(j,'ITALIC');case 'underline':return h.toggleInlineStyle(j,'UNDERLINE');case 'code':return h.toggleCode(j);case 'backspace':case 'backspace-word':case 'backspace-to-start-of-line':return h.onBackspace(j);case 'delete':case 'delete-word':case 'delete-to-end-of-block':return h.onDelete(j);default:return null;}},insertSoftNewline:function i(j){var k=c('DraftModifier').insertText(j.getCurrentContent(),j.getSelection(),'\n',j.getCurrentInlineStyle(),null),l=c('EditorState').push(j,k,'insert-characters');return c('EditorState').forceSelection(l,k.getSelectionAfter());},onBackspace:function i(j){var k=j.getSelection();if(!k.isCollapsed()||k.getAnchorOffset()||k.getFocusOffset())return null;var l=j.getCurrentContent(),m=k.getStartKey(),n=l.getBlockBefore(m);if(n&&n.getType()==='atomic'){var o=l.getBlockMap()['delete'](n.getKey()),p=l.merge({blockMap:o,selectionAfter:k});if(p!==l)return c('EditorState').push(j,p,'remove-range');}var q=h.tryToRemoveBlockStyle(j);if(q)return c('EditorState').push(j,q,'change-block-type');return null;},onDelete:function i(j){var k=j.getSelection();if(!k.isCollapsed())return null;var l=j.getCurrentContent(),m=k.getStartKey(),n=l.getBlockForKey(m),o=n.getLength();if(k.getStartOffset()<o)return null;var p=l.getBlockAfter(m);if(!p||p.getType()!=='atomic')return null;var q=k.merge({focusKey:p.getKey(),focusOffset:p.getLength()}),r=c('DraftModifier').removeRange(l,q,'forward');if(r!==l)return c('EditorState').push(j,r,'remove-range');return null;},onTab:function i(event,j,k){var l=j.getSelection(),m=l.getAnchorKey();if(m!==l.getFocusKey())return j;var n=j.getCurrentContent(),o=n.getBlockForKey(m),p=o.getType();if(p!=='unordered-list-item'&&p!=='ordered-list-item')return j;event.preventDefault();var q=n.getBlockBefore(m);if(!q)return j;var r=q.getType();if(r!=='unordered-list-item'&&r!=='ordered-list-item')return j;var s=o.getDepth();if(!event.shiftKey&&s===k)return j;k=Math.min(q.getDepth()+1,k);var t=c('adjustBlockDepthForContentState')(n,l,event.shiftKey?-1:1,k);return c('EditorState').push(j,t,'adjust-depth');},toggleBlockType:function i(j,k){var l=j.getSelection(),m=l.getStartKey(),n=l.getEndKey(),o=j.getCurrentContent(),p=l;if(m!==n&&l.getEndOffset()===0){var q=c('nullthrows')(o.getBlockBefore(n));n=q.getKey();p=p.merge({anchorKey:m,anchorOffset:l.getStartOffset(),focusKey:n,focusOffset:q.getLength(),isBackward:false});}var r=o.getBlockMap().skipWhile(function(t,u){return u!==m;}).reverse().skipWhile(function(t,u){return u!==n;}).some(function(t){return t.getType()==='atomic';});if(r)return j;var s=o.getBlockForKey(m).getType()===k?'unstyled':k;return c('EditorState').push(j,c('DraftModifier').setBlockType(o,p,s),'change-block-type');},toggleCode:function i(j){var k=j.getSelection(),l=k.getAnchorKey(),m=k.getFocusKey();if(k.isCollapsed()||l!==m)return h.toggleBlockType(j,'code-block');return h.toggleInlineStyle(j,'CODE');},toggleInlineStyle:function i(j,k){var l=j.getSelection(),m=j.getCurrentInlineStyle();if(l.isCollapsed())return c('EditorState').setInlineStyleOverride(j,m.has(k)?m.remove(k):m.add(k));var n=j.getCurrentContent(),o;if(m.has(k)){o=c('DraftModifier').removeInlineStyle(n,l,k);}else o=c('DraftModifier').applyInlineStyle(n,l,k);return c('EditorState').push(j,o,'change-inline-style');},toggleLink:function i(j,k,l){var m=c('DraftModifier').applyEntity(j.getCurrentContent(),k,l);return c('EditorState').push(j,m,'apply-entity');},tryToRemoveBlockStyle:function i(j){var k=j.getSelection(),l=k.getAnchorOffset();if(k.isCollapsed()&&l===0){var m=k.getAnchorKey(),n=j.getCurrentContent(),o=n.getBlockForKey(m);if(o.getLength()>0)return null;var p=o.getType(),q=n.getBlockBefore(m);if(p==='code-block'&&q&&q.getType()==='code-block')return null;if(p!=='unstyled')return c('DraftModifier').setBlockType(n,k,'unstyled');}return null;}};f.exports=h;}),null);