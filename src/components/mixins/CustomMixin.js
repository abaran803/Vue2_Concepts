export default {
    data() {
        return {
            currentVal: 0,
            v1: 0,
            v2: 0
        }
    },
    methods: {
        addVal(a) {
            this.currentVal += a;
        },
        subVal(a) {
            this.currentVal -= a;
        },
        mulVal(a) {
            this.currentVal *= a;
        },
        divVal(a) {
            this.currentVal /= a;
        }
    }
}