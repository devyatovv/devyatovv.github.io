let nextId = 0;

export const toasts = $state<{ id: number; message: string }[]>([]);

export function toast(message: string) {
    const id = nextId++;
    toasts.push({ id, message });
    setTimeout(() => {
        const index = toasts.findIndex((entry) => entry.id === id);
        if (index !== -1) toasts.splice(index, 1);
    }, 3000);
}