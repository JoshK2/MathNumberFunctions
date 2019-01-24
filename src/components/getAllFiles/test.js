const getAllFiles = require('./');
const currentPath = process.cwd();

describe('getAllFiles', function() {
    test('getAllFiles function return array of files path inside directory', () => {
        expect(getAllFiles(`${currentPath}/src/components/getAllFiles`)).toEqual([
            `${currentPath}/src/components/getAllFiles/index.js`,
            `${currentPath}/src/components/getAllFiles/test.js`
        ], "the files array is incorect");
    });
});