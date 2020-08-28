import { defineComponent } from 'vue'

interface IBoxShadow {
  state: {
    horizontalShadow: {
      min: number, start: number, max: number, result: string
    },
    verticalShadow: {
      min: number, start: number, max: number, result: string
    },
    blurRadius: {
      min: number, start: number, max: number, result: string
    },
    spreadRadius: {
      min: number, start: number, max: number, result: string
    },
    shadowColorOpacity: {
      min: number, start: number, max: number, result: string   
    },
    inset: {
      isTrue: boolean, text: string
    }
  }
}

export default defineComponent({
  name: 'BoxShadow',
  data(): IBoxShadow {
    return {
      state: {
        horizontalShadow: {
          min: 200, start: 0, max: 200, result: '10'
        },
        verticalShadow: {
          min: 200, start: 0, max: 200, result: '10'
        },
        blurRadius: {
          min: 200, start: 0, max: 200, result: '2'
        },
        spreadRadius: {
          min: 200, start: 0, max: 200, result: '0'
        },
        shadowColorOpacity: {
          min: 0, start: 0, max: 100, result: '75'
        },
        inset: {
          isTrue: false, text: ''
        }
      }
    }
  },
  methods: {
    handleSetInset() {
      this.state.inset.isTrue = !this.state.inset.isTrue
    },
    handleCopyToClipboard() {
      let content: any = document.querySelector('#code-container')
      content.select()
      document.execCommand('copy')
    },
    handleSetHorizontal(event: Event) {
      this.state.horizontalShadow = (event as any).target.value 
    }
  },
  computed: {
    inset: {
      get(): boolean {
        return this.state.inset.isTrue
      },
      set() {
        this.state.inset.isTrue = !this.state.inset.isTrue
      }
    }
  },
  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
})