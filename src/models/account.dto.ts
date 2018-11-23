export interface AccountDTO {
    account_id: number,
    avail_balance: number,
    close_date: Date,
    last_activity_date: Date,
    open_date: Date,
    pending_balance: number,
    status: string,
    cust_id: number,
    open_branch_id: number,
    open_emp_id: number,
    product_cd: string
}