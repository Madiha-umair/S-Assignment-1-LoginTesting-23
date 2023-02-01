describe("Test Suite", function(){

    //TEST TO PASS
    describe("checkLogin Function Test to pass",function(){
         it("should return the Boolean true if the username and the password match with a known username and matching password.", function(){
            var username = "Madiha";
            var password = "123";
            expect(checkLogin(username, password)).toEqual("true");
        });

    });//end test to pass
/*
    //TEST TO FAIL
    describe("guessNum Function Test to fail",function(){
        it("should return ‘A number was not input.’ if the value entered is not a number(like Q)", function(){
            let testnum = "Q";
            expect(guessNum(testnum)).toEqual("A number was not input.");
        });
        it("should return ‘A value was not entered.’ if it receives an empty string", function(){
            let testnum = "";
            expect(guessNum(testnum)).toEqual("A value was not entered.");
        });
        it("should return ‘Way off!!!! Pick between 1 and 10.’ if the value entered is a number outside of the allowed range of guessing values(like 55)", function(){
            let testnum = "55";
            expect(guessNum(testnum)).toEqual("Way off! Pick between 1 and 10.");
        });
    });// end test to fail

    //BOUNDRY TESTING
    describe("guessNum Function Boundry Testing",function(){
        it("should return true for number 2", function(){
            let testnum = "2";
            expect(guessNum(testnum)).toEqual("Guess again.");
        });
        it("should return true for number 9", function(){
            let testnum = "9";
            expect(guessNum(testnum)).toEqual("Guess again.");
        });
        it("should return false for number 1", function(){
            let testnum = "1";
            expect(guessNum(testnum)).toEqual("Way off! Pick between 1 and 10.");
        });
        it("should return false for number 10", function(){
            let testnum = "10";
            expect(guessNum(testnum)).toEqual("Way off! Pick between 1 and 10.");
        });
        it("should return false for number 0", function(){
            let testnum = "0";
            expect(guessNum(testnum)).toEqual("Way off! Pick between 1 and 10.");
        });
        it("should return false for number 11", function(){
            let testnum = "11";
            expect(guessNum(testnum)).toEqual("Way off! Pick between 1 and 10.");
        });
    });// end boundry testing
    */
});
