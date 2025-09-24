export class Validator {
    /* Validate Email format */
    static validateEmail(email: string): boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    /* Validate Phone Number (Only 10 digits) */
    static validatePhone(phone: string): boolean {
        const re = /^\d{10}$/;
        return re.test(phone);
    }

    /* Validate OTP (Only 6 digits) */
    static validateOTP(otp: string): boolean {
        const re = /^\d{6}$/;
        return re.test(otp);
    }
    static validatePassword(password: string): boolean {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    }

    /* Validate Business Name check if it not emptye */
    static validateBusinessName(businessName: string): boolean {
        //check for empyt str and at leat 3 characters using refgex
        return businessName.length > 0;
    }
    static validateUsername(username: string): boolean {
        if (!username) return false;
        const re = /^(?!.*\.\.)(?!.*\.$)(?!^\.)[A-Za-z0-9._]{3,30}$/;
        return re.test(username);
    }
}