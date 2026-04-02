interface Utility {
    href: string;
    title: string;
}

interface Section {
    title: string;
    utilities: Utility[];
}

export const sections: Section[] = [];
