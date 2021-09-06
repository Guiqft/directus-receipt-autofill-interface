import { inject, ref, watch, resolveComponent, openBlock, createElementBlock, createCommentVNode, createVNode } from 'vue';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var script = {
    emits: ["input"],
    props: {
        value: { type: String, required: true, default: null },
    },
    setup: function (props, _a) {
        var _this = this;
        var emit = _a.emit;
        var values = inject("values");
        var api = inject("api");
        var model = ref(null);
        var error = ref(false);
        watch(values, function (currentValues) { return __awaiter(_this, void 0, void 0, function () {
            var modelId, conteudo, conteudo, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(currentValues.modelo !== model.value)) return [3, 6];
                        model.value = currentValues.modelo;
                        if (!currentValues.modelo) return [3, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        if (!checkIsNumber(currentValues.modelo)) return [3, 3];
                        modelId = currentValues.modelo;
                        return [4, api.get("items/modelo_receita/" + modelId)];
                    case 2:
                        conteudo = (_a.sent()).data.data.conteudo;
                        handleInput(conteudo);
                        return [3, 4];
                    case 3:
                        if (checkIsObject(currentValues.modelo)) {
                            conteudo = currentValues.modelo.conteudo;
                            handleInput(conteudo);
                        }
                        _a.label = 4;
                    case 4: return [3, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        error.value = true;
                        return [3, 6];
                    case 6: return [2];
                }
            });
        }); }, { immediate: true });
        var handleInput = function (value) {
            emit("input", value);
        };
        var checkIsNumber = function (el) { return typeof el === "number"; };
        var checkIsObject = function (el) { return typeof el === "object"; };
        return { handleInput: handleInput, error: error };
    },
};

const _hoisted_1 = { class: "receipt-autofill" };
const _hoisted_2 = { key: 0 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_interface_input_rich_text_html = resolveComponent("interface-input-rich-text-html");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    ($setup.error)
      ? (openBlock(), createElementBlock("p", _hoisted_2, "Não foi possível obter o modelo de receita"))
      : createCommentVNode("v-if", true),
    createVNode(_component_interface_input_rich_text_html, {
      value: $props.value,
      onInput: $setup.handleInput,
      disabled: false
    }, null, 8 /* PROPS */, ["value", "onInput"])
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".receipt-autofill p {\n  color: var(--warning);\n}";
styleInject(css_248z);

script.render = render;
script.__file = "src/Input.vue";

var index = {
    id: "receipt-autofill",
    name: "Receipt Autofill",
    description: "Custom Directus interface to get a receipt template and fill a rich text field.",
    icon: "box",
    component: script,
    types: ["text"],
};

export { index as default };
