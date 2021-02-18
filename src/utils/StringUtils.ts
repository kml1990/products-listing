export default class StringUtils {
    static toGBP(amount: number): string {
        return amount.toLocaleString('en-UK', {
            style: 'currency',
            currency: 'GBP',
        });
    }
}
