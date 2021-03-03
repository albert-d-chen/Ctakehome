import * as PhysicianAPIUtil from '../util/physician_api_util';

export const RECEIVE_PHYSICIAN = 'RECEIVE_PHYSICIAN';
export const RECEIVE_PHYSICIANS = 'RECEIVE_PHYSICIANS';


export const receivePhysician = physician => ({
    type: RECEIVE_PHYSICIAN,
    physician
})

export const receivePhysicians = physicians => ({
    type: RECEIVE_PHYSICIANS,
    physicians
})

export const getPhysician = physicianId => dispatch => (
    PhysicianAPIUtil.fetchPhysician(physicianId)
        .then((physician) => dispatch(receivePhysician(physician)))
)

export const getPhysicians = () => dispatch => (
    PhysicianAPIUtil.fetchPhysicians()
        .then((physicians) => dispatch(receivePhysicians(physicians)))
)


