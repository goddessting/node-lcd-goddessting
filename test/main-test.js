var test = require('../main/main.js');

describe('pos', function () {
    var inputs;

    beforeEach(function () {
        inputs = 910;
    });


    describe('Unit Test', function () {

        describe('Test getStringNumber', function(){

            it('return right stringNumber',function(){

                var inputs = 1234;
                var exceptResult = test.getStringNumber(inputs);

                var result = ['1','2','3','4'];

                expect(result).toEqual(exceptResult);
            });
        });

        describe('Test getObjectNumber', function () {

            var allNumbers = {
                5: ['._.', '|_.', '._|'],
                6: ['._.', '|_.', '|_|'],
                7: ['._.', '..|', '..|'],
                8: ['._.', '|_|', '|_|']
            };

            it('return right objectNumber', function () {

                var inputs = ['5','6','7','8'];
                var result = test.getObjectNumber(inputs, allNumbers);

                var exceptResult = [['._.', '|_.', '._|'],
                    ['._.', '|_.', '|_|'],
                    ['._.', '..|', '..|'],
                    ['._.', '|_|', '|_|']
                ];

                expect(result).toEqual(exceptResult);
            });
        });

    });

    describe('Integration test', function () {
        it('should print correct text', function () {

            spyOn(console, 'log');

            test.buildLcd(inputs);
            var expectText =
                '._. ' + '... ' + '._. ' + '\n' +
                '|_| ' + '..| ' + '|.| ' + '\n' +
                '..| ' + '..| ' + '|_| ' + '\n';

            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});