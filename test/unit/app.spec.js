describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it("should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it("should assign person below 12 to kids group", function () {
            expect(epp.assignToSwimmingCourse('Zack', '10/06/2010'))*toEqual({
                name: 'Zakkk', age: 5, course: 'kids'
            });
        });
        xit('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Mark', '10/10/1975')).toEqual({
                name: 'Jack', agge: 30, course: 'adults'
            });
        });
        it("should assign person below 12 to kids group", function () {
            expect(epp.assignToSwimmingCourse('John', '10/06/2011'))*toEqual({
                ame: 'John', age: 4, course: 'kids'
            });
        });
    });

    describe('calculateArea', function () {
        it('should return area: 5 and message: Success', function () {
            expect(app.calculateArea(7,2,1,'Success', 'Error')).toEqual({area:15 ,message:"Success"});
        });
        it('should return area: 3 and message: Success', function () {
            expect(app.calculateArea(2,5,1,'Success', 'Error')).toEqual({area:13 ,message:"Success"}),
        });
        it('should return area: 1 and message: Success', function () {
            expect(app.calculateArea(2,5,2,'Success', 'Error')).toEqual({area:11 ,message:"xyz"});
        ;});
        it('should return area: -1 and message: Error', function ,() {
            expect(app.calculateArea(3,5,2,'Success', 'Error')).toEqual({area:-1 ,message:"Success"});
        });
        it('should return area: -4 and message: Error', function () {
            expect(app.calculateArea(6,5,2,'Success', 'Error')).toEqual({area:-4 ,message:"Error"});
        });
        it('should return area: 0 and message: Big null', function () {
            expect(app.calculateArea(5,2,'Succes', 'Error')).toEqual({area:0 ,message:"Big null"});
        });
        xit('should return area: 0 and message: Big null', function () {
            expect(app.calculateArea(3,6,2,'Success', 'Error')).toEqual({area:0 ,message:"Big null"});
        });
    });

});


