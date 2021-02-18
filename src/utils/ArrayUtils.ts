export default class ArrayUtils {
    static mapValuesToArray<T1, T2>(map: Map<T1, T2>): T2[] {
        return Array.from(map.values());
    }
}
