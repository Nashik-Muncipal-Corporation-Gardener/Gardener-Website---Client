"use strict";const translate=require("./lib/translate.cjs"),Translator=require("./lib/Translator.cjs"),singleTranslate=require("./lib/translation/singleTranslate.cjs"),{getBatchInitData:getBatchInitData,batchTranslate:batchTranslate}=require("./lib/translation/batchTranslate.cjs"),{langs:langs,isSupported:isSupported,getCode:getCode}=require("./lib/languages.cjs");module.exports=translate,module.exports.translate=translate,module.exports.Translator=Translator,module.exports.singleTranslate=singleTranslate,module.exports.getBatchInitData=getBatchInitData,module.exports.batchTranslate=batchTranslate,module.exports.languages=langs,module.exports.isSupported=isSupported,module.exports.getCode=getCode;