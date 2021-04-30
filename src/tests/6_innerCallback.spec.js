/* eslint-env jest */
const funcWithInnerCallback = require("../6_innerCallback");

const vm = {
    post: {
        uid: 2,
    },
}

const callObject = {
    from: {},
    to: {
        params: {
            uid: ' 2',
        },
    },

    next: jest.fn(callback => {
        if (typeof callback === 'function') {
            callback(vm)
        }
    }),
}

describe('sum()', () => {
    test('Given 1 and 2, should sums 3', () => {
        funcWithInnerCallback(callObject.to, callObject.from, callObject.next)

        expect(callObject.next).toHaveBeenCalledTimes(1)
    })
})
