if (self.CavalryLogger) { CavalryLogger.start_js(["m7svt"]); }

__d('ReactComposerFocusDiscardDialog.react',['fbt','FBConfirmDialog.react','React'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').PureComponent);j=i&&i.prototype;l.prototype.render=function(){'use strict';return c('React').createElement(c('FBConfirmDialog.react'),{content:h._("If you leave now, your post won't be saved."),onConfirm:this.props.onCancel,onCancel:this.props.onConfirm,onToggle:this.props.onCancel,shown:true,title:h._("Finish Your Post?"),confirmButtonText:h._("Go to Post"),cancelButtonText:h._("Discard Post")});};function l(){'use strict';i.apply(this,arguments);}l.propTypes={onConfirm:k.func.isRequired,onCancel:k.func.isRequired};f.exports=l;}),null);