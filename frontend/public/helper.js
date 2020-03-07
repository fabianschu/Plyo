import InterviewIcon from '@material-ui/icons/QuestionAnswer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';
import RejectedIcon from '@material-ui/icons/NotInterested';

export const getIcon = (stage) => {
    if (stage === 'applied') return 'MailIcon'
    if (stage === 'interview') return 'InterviewIcon'
    if (stage === 'challenge') return 'AssignmentIcon'
    if (stage === 'rejected') return 'RejectedIcon'
}