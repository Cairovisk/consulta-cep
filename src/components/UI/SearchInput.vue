<template>
    <div class="searchInput" :class="{focus: selectActive, error: error}">
        <slot></slot>
        <label>{{ nome }}</label>
        <font-awesome-icon  v-if="hasSearch" :icon="['fas', 'search']" />
    </div>
</template>

<script>

export default {
    props: ['nome', 'selectActive', 'error', 'hasSearch'],
    data() {
        return {
            focused: false
        }
    }
}
</script>

<style scoped lang="scss">
    .searchInput {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-family: $font;
        height: 42px;
        width: 100%;
        position: relative;
        transition: 0.2s;

        &.focus {
            
            label {
                font-size: 11px;
                top: 3px;
                left: 5px;
            }

            textarea {
                font-size: 11px;
                top: 3px;
                left: 5px;
            }
        }

        &.error {
            
            input, textarea, select {
                border: 2px solid $red-primary;
            }
        }

        label {
            position: absolute;
            top: 14px;
            left: 15px;
            font-style: normal;
            font-weight: $semibold;
            font-size: 12px;
            line-height: 15px;
            color: $gray;
            text-transform: uppercase;
            transition: 0.2s;
            pointer-events: none;
        }

        input, textarea, select {
            -webkit-appearance: none;
            display: block;
            width: 100%;
            height: 42px;
            font-family: $font;
            font-style: normal;
            font-weight: $semibold;
            font-size: 13px;
            line-height: 15px;
            color: $black;
            outline: none;
            border-radius: 5px;
            padding-top: 16px;
            padding-left: 3px;
            padding-right: 3px;
            background: $white-primary;
            border: 1px solid $black;
            box-sizing: border-box;
            resize: none;

            &:disabled {
                color: $white-secondary;
            }
        }

        input:focus {
            background: $white-primary;
            border: 2px solid $purple;
        }

        input:focus ~ label {
            font-size: 11px;
            top: 5px;
            left: 5px;
        }

        input:focus ~ svg {
            transition: 0.2s;
            font-size: 12px;
            top: 5px;
            right: 5px;
        }

        input:not(:placeholder-shown) ~ label {
            font-size: 11px;
            top: 5px;
            left: 5px;
        }

        textarea:focus {
            background: $white-primary;
            border: 2px solid $black;
        }

        textarea:focus ~ label {
            font-size: 11px;
            top: 5px;
            left: 5px;
        }

        textarea:not(:placeholder-shown) ~ label {
            font-size: 11px;
            top: 5px;
            left: 5px;
        }
        
        svg {
            transition: 0.2s;
            font-size: 18px;
            position: absolute;
            top: 12px;
            right: 14px;
            color: $white-secondary;

            .search {
                display: none;
            }
        }
    }

    

    
</style>
