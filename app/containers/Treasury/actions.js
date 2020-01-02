import { INITIAL_FUND } from './constants';

export const initialFund = (companyId, fund) => ({
  type: INITIAL_FUND,
  payload: { companyId, fund },
});
