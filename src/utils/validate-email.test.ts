import { validateEmail } from './validate-email';


describe('Validate Email', () => {
    it('is a function', () => {
        expect(typeof validateEmail).toBe('function');
    });
    
    describe('Positive', () => {
        it('approves short adresses', () => {
            expect(validateEmail('a@b.cd')).toEqual(true);
            expect(validateEmail('email@example.com')).toEqual(true);
            expect(validateEmail('awdopawkdop@duiwahdui.com')).toEqual(true);
        });
        
        it('approves long adresses', () => {
            expect(validateEmail('dahdbwhjabhdjbajhwdbjhawdjdwadawdawdaw@b.cd')).toEqual(true);
        });
        
        it('approves subdomain adresses', () => {
            expect(validateEmail('a@b.b.cd')).toEqual(true);
            expect(validateEmail('email@subdomain.example.com')).toEqual(true);
        });
        
        it('approves plused adresses', () => {
            expect(validateEmail('a+1@b.cd')).toEqual(true);
            expect(validateEmail('firstname+lastname@example.com')).toEqual(true);
        });
        
        it('approves dashed adresses', () => {
            expect(validateEmail('a-a@b.cd')).toEqual(true);
            expect(validateEmail('firstname-lastname@example.com')).toEqual(true);
        });
        
        it('approves doted adresses', () => {
            expect(validateEmail('a.a@b.cd')).toEqual(true);
            expect(validateEmail('firstname.lastname@example.com')).toEqual(true);
        });
        
        it('approves digit domains', () => {
            expect(validateEmail('email@123.123.123.123')).toEqual(true);
        });
        
        it('approves IP domains', () => {
            expect(validateEmail('email@[123.123.123.123]')).toEqual(true);
        });
        
        it('approves quoted adresses', () => {
            expect(validateEmail('"email"@example.com')).toEqual(true);
        });
        
        it('approves digit adresses', () => {
            expect(validateEmail('1234567890@example.com')).toEqual(true);
        });
        
        it('approves underscore adresses', () => {
            expect(validateEmail('a_a@b.cd')).toEqual(true);
            expect(validateEmail('_______@example.com')).toEqual(true);
        });
    });
    
    describe('Negative', () => {
        it('denies empty strings', () => {
            expect(validateEmail('')).toEqual(false);
        });
        
        it('denies whitespace strings', () => {
            expect(validateEmail('   ')).toEqual(false);
        });
        
        it('denies numeric strings', () => {
            expect(validateEmail('1243544')).toEqual(false);
        });
        
        it('denies a random @ symbol', () => {
            expect(validateEmail('@')).toEqual(false);
        });
        
        it('denies emails with no @ symbol', () => {
            expect(validateEmail('email.example.com')).toEqual(false);
        });
        
        it('denies on a plain adress', () => {
            expect(validateEmail('asdasdas')).toEqual(false);
        });
        
        it('denies on a missing adress', () => {
            expect(validateEmail('@example.com')).toEqual(false);
        });
        
        it('denies unfinished domains', () => {
            expect(validateEmail('a@b')).toEqual(false);
        });
        
        it('denies adresses with whitespace', () => {
            expect(validateEmail('a a@b.cd')).toEqual(false);
        });
        
        it('denies adresses with trailing whitespace', () => {
            expect(validateEmail('a @b.cd')).toEqual(false);
        });
        
        it('denies adresses with leading dots', () => {
            expect(validateEmail('.a@b.cd')).toEqual(false);
        });
        
        it('denies adresses with trailing dots', () => {
            expect(validateEmail('a.@b.cd')).toEqual(false);
        });
        
        it('denies domains with leading whitespace', () => {
            expect(validateEmail('a@ b.cd')).toEqual(false);
        });
        
        it('denies domain with enclosed whitespace', () => {
            expect(validateEmail('a@b b.cd')).toEqual(false);
        });
        
        it('denies adresses with multiple domain dots', () => {
            expect(validateEmail('a@b..cd')).toEqual(false);
            expect(validateEmail('a@b..b.cd')).toEqual(false);
        });
    });
});
