!function(){"use strict";var e={n:function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(l,{a:l}),l},d:function(t,l){for(var o in l)e.o(l,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:l[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,l=window.React,o=window.wp.i18n,a=window.wp.data,n=window.wp.serverSideRender,s=e.n(n),r=window.wp.blockEditor,d=window.wp.components;(0,t.registerBlockType)("contextual-related-posts/related-posts",{edit:function({attributes:e,setAttributes:t}){const n=(0,a.select)("core/editor"),c=n?n.getCurrentPostId():0,{heading:u,title:i,limit:p,offset:_,show_excerpt:h,show_author:m,show_date:x,random_order:b,ordering:f,post_thumb_op:w,other_attributes:E}=e,g=(0,r.useBlockProps)();return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(r.InspectorControls,null,(0,l.createElement)(d.PanelBody,{title:(0,o.__)("Related Posts Settings","contextual-related-posts"),initialOpen:!0},(0,l.createElement)(d.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(d.ToggleControl,{label:(0,o.__)("Show heading","contextual-related-posts"),help:u?(0,o.__)("Heading displayed","contextual-related-posts"):(0,o.__)("No Heading displayed","contextual-related-posts"),checked:u,onChange:()=>{t({heading:!u})}}))),u&&(0,l.createElement)(d.PanelRow,null,(0,l.createElement)(d.TextControl,{label:(0,o.__)("Heading of posts","contextual-related-posts"),value:i,onChange:e=>{t({title:void 0===e?"":e})},help:(0,o.__)("Displayed before the list of the posts as a master heading. HTML allowed.","contextual-related-posts")})),(0,l.createElement)(d.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(d.TextControl,{label:(0,o.__)("Number of posts","contextual-related-posts"),value:p,onChange:e=>{t({limit:void 0===e?"":e})},help:(0,o.__)("Maximum number of posts to display","contextual-related-posts")}))),(0,l.createElement)(d.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(d.TextControl,{label:(0,o.__)("Offset","contextual-related-posts"),value:_,onChange:e=>{t({offset:void 0===e?"":e})},help:(0,o.__)("Number of posts to skip from the top","contextual-related-posts")}))),(0,l.createElement)(d.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(d.ToggleControl,{label:(0,o.__)("Show excerpt","contextual-related-posts"),help:h?(0,o.__)("Excerpt displayed","contextual-related-posts"):(0,o.__)("No excerpt","contextual-related-posts"),checked:h,onChange:()=>{t({show_excerpt:!h})}}))),(0,l.createElement)(d.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(d.ToggleControl,{label:(0,o.__)("Show author","contextual-related-posts"),help:m?(0,o.__)('"by Author Name" displayed',"contextual-related-posts"):(0,o.__)("No author displayed","contextual-related-posts"),checked:m,onChange:()=>{t({show_author:!m})}}))),(0,l.createElement)(d.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(d.ToggleControl,{label:(0,o.__)("Show date","contextual-related-posts"),help:x?(0,o.__)("Date of post displayed","contextual-related-posts"):(0,o.__)("Date of post not displayed","contextual-related-posts"),checked:x,onChange:()=>{t({show_date:!x})}}))),(0,l.createElement)(d.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(d.SelectControl,{label:(0,o.__)("Thumbnail option","contextual-related-posts"),value:w,onChange:e=>{t({post_thumb_op:e})},help:(0,o.__)("Location of the post thumbnail","contextual-related-posts"),options:[{value:"inline",label:(0,o.__)("Before title","contextual-related-posts")},{value:"after",label:(0,o.__)("After title","contextual-related-posts")},{value:"thumbs_only",label:(0,o.__)("Only thumbnail","contextual-related-posts")},{value:"text_only",label:(0,o.__)("Only text","contextual-related-posts")}]}))),(0,l.createElement)(d.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(d.RadioControl,{label:(0,o.__)("Order posts","contextual-related-posts"),selected:f,onChange:e=>{t({ordering:e})},help:(0,o.__)("This option directly edits the query","contextual-related-posts"),options:[{value:"relevance",label:(0,o.__)("By relevance","contextual-related-posts")},{value:"random",label:(0,o.__)("Randomly","contextual-related-posts")},{value:"date",label:(0,o.__)("By date","contextual-related-posts")}]}))),(0,l.createElement)(d.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(d.ToggleControl,{label:(0,o.__)("Randomize posts","contextual-related-posts"),help:b?(0,o.__)("Posts are shuffled on each load","contextual-related-posts"):(0,o.__)("Posts displayed based on above setting","contextual-related-posts"),checked:b,onChange:()=>{t({random_order:!b})}}))),(0,l.createElement)(d.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(d.TextareaControl,{label:(0,o.__)("Other attributes","contextual-related-posts"),value:E,onChange:e=>{t({other_attributes:void 0===e?"":e})},help:(0,o.__)("Enter other attributes in a URL-style string-query. e.g. post_types=post,page&link_nofollow=1&exclude_post_ids=5,6","contextual-related-posts")}))))),(0,l.createElement)("div",{...g},c?(0,l.createElement)(d.Disabled,null,(0,l.createElement)(s(),{block:"contextual-related-posts/related-posts",attributes:e})):(0,l.createElement)(d.Placeholder,{icon:"list-view",label:(0,o.__)("Contextual Related Posts","contextual-related-posts"),instructions:(0,o.__)("This is a placeholder for the related posts block. Visit the front end of your site to see the related posts.","contextual-related-posts")})))},save(){return null}})}();