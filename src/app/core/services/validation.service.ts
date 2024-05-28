import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  passwordPattern = /^.(?=.*[a-z])(?=.*[0-9])(?=.*[~!@#$%^&*()_-]).{7,}$/;
  validPhoneUS = /\(\d{3}\) \d{3}-\d{4}/;
  float=/^[+-]?\d+(\.\d+)?$/
  emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  // emailPattern = (/^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*\\\$/);
  numerical = '^[0-9]*$';
  urlPattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
  facebookPattern = /http(?:s):\/\/(?:www\.)facebook\.com\/.+/i;
  googlePattern = /http(?:s):\/\/(?:www\.)google\.com\/.+/i;
  yelpPattern = /http(?:s):\/\/biz.yelp\.com\/.+/i;
  // alphaPattern = /^(?:[a-zA-Z\s\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,25}$/;
  preventSpaces = "^[A-Za-z][A-Za-z0-9]*$";
  webSiteValidation = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  // phonePattern = /^([0-9]{3} |[0-9]{3})[0-9]{3} [0-9]{4,5}$/;
  phonePattern = /^\d{2} \d{3} \d{4}$/;
  zipCodePattern = /\b\d{5}\b/;
  alphaPattern = /^(?:[a-zA-Z\s\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF]))+$/;
  whitespacePattern = /^\s*$/;

  // ***** password validations
  passwordLettersPattern = /[A-Za-z]/;
  passwordCapitalLetterPatter = /[A-Z]/;
  passwordSmallLetterPatter = /[a-z]/;
  passwordNumbersPattern = /\d/;
  passwordSpecialCharPattern = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

  constructor(@Inject(LOCALE_ID) public locale: string,) {
   }


  matchingPasswords(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isNotMatched = control.get('password')?.value !== control.get('password_confirmation')?.value;
      return isNotMatched ? { unmatchedPasswords: true } : null;
    };
  }
  patternWithMessage = (pattern: RegExp, error: ValidationErrors): ValidatorFn => {
    return (control: AbstractControl): any | null => {
      if (!control?.value) {
        return null;
      }

      return pattern.test(control?.value) ? null : error;
    }
  }

  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } |null => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error, else return error passed in the second parameter
      return valid ? null : error;
    };
  }

  checkWhitespace(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } |null => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
      let val:string = control.value;
      // let afterRemoveWhiteSpacesVal:string = val.trim();

      // // if true, return no error, else return error passed in the second parameter
      // return val.length == afterRemoveWhiteSpacesVal.length ? null : { whitespace: true };

      // Regular expression to match whitespace characters
      var whitespaceRegex = /^\s*$/;

      // Test if the string matches the regular expression
      return !whitespaceRegex.test(val) ? null : { whitespace: true };

    };
  }

  validatePhoneNumber(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } |null => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
      let val:string = control.value;

      if(val.startsWith("0")){
        // Regular expression to match whitespace characters
        var phoneRegex = /^\d{3} \d{3} \d{4}$/;
        // Test if the string matches the regular expression
        return phoneRegex.test(val) ? null : { validPhoneNumber: this.locale == 'ar' ? '١٨٢٨ ١٦٤ ٠٥٠' : '050 461 8281' };

      }else{
        // Regular expression to match whitespace characters
        var phoneWithoutZeroRegex = /^\d{2} \d{3} \d{4}$/;
        // Test if the string matches the regular expression
        return phoneWithoutZeroRegex.test(val) ? null : { validPhoneNumber: this.locale == 'ar' ? '١٨٢٨ ١٦٤ ٥٠' : '50 461 8281' };
      }


    };
  }

}
