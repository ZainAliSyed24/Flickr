const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const CANCEL = "CANCEL";

const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";

function createRequestTypes(base) {
	const res = {};
	[REQUEST, SUCCESS, FAILURE, CANCEL, CREATE, UPDATE, DELETE].forEach(
		type => {
			res[type] = `${base}_${type}`;
		}
	);
	return res;
}
//DEFAULT ACTIONS
export const GENERAL_ACTION = "GENERAL_ACTION";
export const GENERAL_ACTION_MULTIPLE_REQUEST =
	"GENERAL_ACTION_MULTIPLE_REQUEST";
export const NO_INTERNET = "NO_INTERNET";
//SOCKET DEFAULT ACTIONS
export const SOCKET_INFO = createRequestTypes("SOCKET_INFO");
export const SOCKET_DUMP = createRequestTypes("SOCKET_DUMP");
export const SOCKET_WRITE = "SOCKET_WRITE";
//NETWORK DEFAULT ACTION
export const NETWORK_INFO = "NETWORK_INFO";
//LOCATION ACTIONS
export const USER_LOCATION = createRequestTypes("USER_LOCATION");
//APP GENERAL ACTIONS
export const LOGIN = createRequestTypes("LOGIN");
export const SIGNUP = createRequestTypes("SIGNUP");
export const DUMP = createRequestTypes('DUMP');
export const FORGOT_PASSWORD = createRequestTypes("FORGOT_PASSWORD");
export const CHANGE_PASSWORD = createRequestTypes("CHANGE_PASSWORD");
export const JOB_DRAFTS = createRequestTypes("JOB_DRAFTS");
export const LOGOUT = "LOGOUT";
export const COUNTRIES = createRequestTypes('COUNTRIES');
export const CURRENCIES = createRequestTypes('CURRENCIES');
export const CREATE_JOB = createRequestTypes('CREATE_JOB')
export const ALL_JOBS = createRequestTypes('ALL_JOBS')
export const ACTIVE_JOBS = createRequestTypes('ACTIVE_JOBS')
export const CLOSED_JOBS = createRequestTypes('CLOSED_JOBS')
export const DRAFT_JOBS = createRequestTypes('DRAFT_JOBS')
export const ALL_JOBS_TEMPLATES = createRequestTypes('ALL_JOBS_TEMPLATES')
export const CANDIDATE_DETAIL = createRequestTypes('CANDIDATE_DETAIL')
export const CANDIDATE_STATUS = createRequestTypes('CANDIDATE_STATUS')
export const SOURCER_OPEN_JOBS = createRequestTypes('SOURCER_OPEN_JOBS')
export const SOURCER_MY_JOBS = createRequestTypes('SOURCER_MY_JOBS') 
export const HIRING_ALL_INTERVIEWS = createRequestTypes('HIRING_ALL_INTERVIEWS') 
export const INTERVIEW_TEMPLATES = createRequestTypes('INTERVIEW_TEMPLATES')
export const ACCEPTED_JOB_CANDIDATES = createRequestTypes('ACCEPTED_JOB_CANDIDATES') 
export const EMPLOYER_DETAILS = createRequestTypes('EMPLOYER_DETAILS')
//APP RELATED ACTIONS  
//ADD HERE
export const USER = createRequestTypes('USER');
export const CHANGE_DIRECTION = createRequestTypes('CHANGE_DIRECTION'); 
export const CHANGE_LANGUAGE = createRequestTypes('CHANGE_LANGUAGE');
export const AUTH_CHANGE_STACK = 'AUTH_CHANGE_STACK';
export const DRAFT_DATA = 'DRAFT_DATA';
export const SOURCER_STEPS = 'SOURCER_STEPS';