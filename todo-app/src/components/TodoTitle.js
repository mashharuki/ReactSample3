/**
 * タイトルコンポーネント
 */
export const TodoTitle = ({ title, as }) => {
    // asがh1であれば<h1>で囲む
    if (as == "h1") {
        return <h1>{title}</h1>;
    } else if (as == "h2") { // asがh2であれば<h2>で囲む
        return <h2>{title}</h2>;
    } else { // どれでもなければ <p>で囲む
        return <p>{title}</p>;
    }
};