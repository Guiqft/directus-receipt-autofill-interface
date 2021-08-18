<template>
    <div class="receipt-autofill">
        <p v-if="error">Não foi possível obter o modelo de receita</p>
        <interface-input-rich-text-html
            :value="value"
            @input="handleInput"
            :disabled="false"
        />
    </div>
</template>

<script lang="ts">
import { ref, inject, watch } from "vue"
export default {
    emits: ["input"],
    props: {
        value: { type: String, required: true, default: null },
    },
    setup(props, { emit }) {
        const values = inject("values") as Record<string, any>
        const system = inject("system") as Record<string, any>

        const model = ref(null)
        const error = ref(false)

        watch(
            values,
            async (currentValues) => {
                // checking for changes to prevent loops
                if (currentValues.modelo !== model.value) {
                    model.value = currentValues.modelo

                    if (currentValues.modelo) {
                        try {
                            if (checkIsNumber(currentValues.modelo)) {
                                // getting model data from existing id
                                const modelId = currentValues.modelo
                                const { conteudo } = (
                                    await system.api.get(
                                        `items/modelo_receita/${modelId}`
                                    )
                                ).data.data
                                handleInput(conteudo)
                            } else if (checkIsObject(currentValues.modelo)) {
                                // when a new model is created
                                const { conteudo } = currentValues.modelo
                                handleInput(conteudo)
                            }
                        } catch (e) {
                            console.error(e)
                            error.value = true
                        }
                    }
                }
            },
            { immediate: true }
        )

        const handleInput = (value: string | null) => {
            emit("input", value)
        }

        const checkIsNumber = (el: any) => typeof el === "number"
        const checkIsObject = (el: any) => typeof el === "object"

        return { handleInput, error }
    },
}
</script>

<style lang="scss">
.receipt-autofill {
    p {
        color: var(--warning);
    }
}
</style>
