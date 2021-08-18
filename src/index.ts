import InputInterface from "./Input.vue"

export default {
    id: "receipt-autofill",
    name: "Receipt Autofill",
    description:
        "Custom Directus interface to get a receipt template and fill a rich text field.",
    icon: "box",
    component: InputInterface,
    types: ["text"],
}
