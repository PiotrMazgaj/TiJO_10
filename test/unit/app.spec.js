describe('app', function () {
    'use strict';

    var app = window.app;

    describe("assignToSwimmingCourse", function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 15, course: 'teens'
            });
        });
        xit('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });});
		it('should assign person below 12 to kids group', function () {
			expect(app.assignToSwimmingCourse('Zorg', '10/06/2005')).toEqual({
				name: 'Zorg', age: 10, course: 'kids'
			});
		});
		xit('should assign person below 12 to kids group', function () {
			expect(app.assignToSwimmingCourse('John', '10/06/2006')).toEqual({
				name: 'John', age: 9, course: 'adults'
			});
		});
    });

	describe('calculateArea', function () {
		it('check Fail', function () {
			expect(app.calculateArea(3,2,3,'OK','Fail')).toEqual({
				area: -3, message: 'Fail'
			});
		});
		it('check 0', function () {
			expect(app.calculateArea(1,1,1,'OK','Fail')).toEqual({
				area: 0,message: 'Big null'
			});
		});
		it("check ok", function () {
			expect(app.calculateArea(2,1,1,'OK','Fail')).toEqual({area: 1 ,message: 'OK'});
		});
	});
});


