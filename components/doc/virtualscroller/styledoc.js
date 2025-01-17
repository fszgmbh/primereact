import { DocSectionText } from '../common/docsectiontext';
import Link from 'next/link';

export function StyleDoc() {
    return (
        <>
            <DocSectionText id="style" label="Style">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
                </p>
            </DocSectionText>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-virtualscroller</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-virtualscroller-content</td>
                            <td>Content element.</td>
                        </tr>
                        <tr>
                            <td>p-virtualscroller-loader</td>
                            <td>Loader element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
