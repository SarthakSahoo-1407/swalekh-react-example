"use client"
import { useSwalekhConfig } from "swalekh-react";
export function SwalekhConfig() {
    const { setConfig } = useSwalekhConfig();

    return (
        <div>
            <label>
                Language:
                <select
                    onChange={(e) =>
                        setConfig((c) => ({ ...c, language: e.target.value }))
                    }
                >
                    <option value="hi">Hindi</option>
                    <option value="or">Odia</option>
                    <option value="bn">Bengali</option>
                    <option value="gu">Gujarati</option>
                    <option value="ta">Tamil</option>
                </select>
            </label>
            <label>
                Mode:
                <select
                    onChange={(e) => setConfig((c) => ({ ...c, mode: e.target.value }))}
                >
                    <option value="phonetic">Phonetic</option>
                    <option value="keyboard">Keyboard</option>
                </select>
            </label>
        </div>
    );
}
