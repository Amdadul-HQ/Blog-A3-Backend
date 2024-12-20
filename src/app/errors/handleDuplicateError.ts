import { TErrorSource, TGenericErrorResponse } from "../interface/error";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDuplicateError = (err:any):TGenericErrorResponse => {

    const match = err.message.match(/"([^"]*)"/);
    
    const extractMessate = match && match[1];




    const errorSources: TErrorSource = [
      {
        path: '',
        message: `${extractMessate} Is Already exists!!`,
      },
    ];


    const statusCode =400;
    return {
        statusCode,
        message:'Invalid ID',
        errorSources,
    }
};

export default handleDuplicateError;