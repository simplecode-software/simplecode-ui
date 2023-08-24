jest.mock('react', () => {
    return Object.setPrototypeOf(
        {
            ...jest.requireActual('react'),
            memo: (cmp: React.Component): React.Component => cmp,
        },
        jest.requireActual('react'),
    );
});

jest.mock('../src/types');
