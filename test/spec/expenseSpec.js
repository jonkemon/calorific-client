describe('ExpenseItem', function(){
	var theExpense;

	it('should have a default expense item value of 100', function(){
		theExpense = new expenseItem(100);

		expect(theExpense.amount).toEqual(100);
	});
})