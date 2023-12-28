export function kebabCaseToTitleCase(name) {
    const nameSpaces = name.replaceAll('-', ' ');
    const nameWithCaps = nameSpaces.replace(/\b([a-z])/g, (match) =>
        match.toUpperCase()
    );
    return nameWithCaps;
}