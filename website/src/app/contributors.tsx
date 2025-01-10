export default function Contributors() {
    const contributors = ["Contributor 1", "Contributor 2", "Contributor 3"];

    return (
        <div>
            <h1>Contributors</h1>
            <ul>
                {contributors.map((contributor, index) => (
                    <li key={index}>{contributor}</li>
                ))}
            </ul>
        </div>
    );
}
