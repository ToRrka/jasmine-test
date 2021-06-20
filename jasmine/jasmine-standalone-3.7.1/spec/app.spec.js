describe('Test TODO list', () => {
    let newTodo;

    beforeEach(() => {
        todos = [new Todo('test 1', 1), new Todo('test 2', 2)];
    });
    afterEach(() => {
        todos = [];
    });

    describe(' Test Add new todo', () => {
        it('add new todo', () => {
            const newTodoId = 3;
            newTodo = new Todo('test new todo', newTodoId);
            addTodo(newTodo);
            expect(todos[todos.length - 1]).toEqual(newTodo);
        });

        it('add new todo with already used ID', () => {
           const newTodoId = 1;
           expect(function () {
               newTodo = new Todo('test new todo', newTodoId);
               addTodo(newTodo);
           }).toThrowError('todo with this id already exists');
        });

        it('add new todo with invalid argument', () => {
            const newTodoId = 1;
            expect(function () {
                addTodo({id: 'test_id_1', name: 'test'});
            }).toThrowError('invalid argument');
        });
    });

    describe('Test remove todo', () => {
        it('remove by id', () => {
            removeTodoById(1);
            expect(todos.length).toBe(1);
        });

        it('remove non-existent id', () => {
            let id = 53
            expect(() => {
                removeTodoById(id);
            }).toThrowError(`Todo with id: ${id} not found`);
        });

        it('remove all', () => {
            clearTodoList();
            expect(todos.length).toBe(0);
        });

        it('remove last todo', () => {
            removeLastTodo();
            expect(todos[todos.length - 1]).toEqual(new Todo('test 1', 1));
        });
    })

})
