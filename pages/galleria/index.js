import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/galleria/accessibilitydoc';
import { AdvancedDoc } from '../../components/doc/galleria/advanceddoc';
import { AutoPlayDoc } from '../../components/doc/galleria/autoplaydoc';
import { BasicDoc } from '../../components/doc/galleria/basicdoc';
import { CaptionDoc } from '../../components/doc/galleria/captiondoc';
import { ControlledDoc } from '../../components/doc/galleria/controlleddoc';
import { CustomContentDoc } from '../../components/doc/galleria/fullscreen/customcontentdoc';
import { WithoutThumbnailsDoc } from '../../components/doc/galleria/fullscreen/withoutthumbnailsdoc';
import { WithThumbnailsDoc } from '../../components/doc/galleria/fullscreen/withthumbnailsdoc';
import { ImportDoc } from '../../components/doc/galleria/importdoc';
import { ClickEventDoc } from '../../components/doc/galleria/indicator/clickeventdoc';
import { HoverEventDoc } from '../../components/doc/galleria/indicator/hovereventdoc';
import { PositionDoc } from '../../components/doc/galleria/indicator/positiondoc';
import { IndicatorTemplateDoc } from '../../components/doc/galleria/indicator/templatedoc';
import { HoverDoc } from '../../components/doc/galleria/navigator/hoverdoc';
import { IndicatorsDoc } from '../../components/doc/galleria/navigator/indicatorsdoc';
import { ItemThumbnailsDoc } from '../../components/doc/galleria/navigator/itemthumbnailsdoc';
import { ItemWithoutThumbnailsDoc } from '../../components/doc/galleria/navigator/itemwithouthumbnailsdoc';
import { ResponsiveDoc } from '../../components/doc/galleria/responsivedoc';
import { StyleDoc } from '../../components/doc/galleria/styledoc';
import { ThumbnailDoc } from '../../components/doc/galleria/thumbnaildoc';

const GalleriaDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
        },
        {
            id: 'indicator',
            label: 'Indicator',
            description: 'Indicators allow quick navigation between the items.',
            children: [
                {
                    id: 'indciatorbasic',
                    label: 'Click Event',
                    component: ClickEventDoc
                },
                {
                    id: 'indciatorhoverevent',
                    label: 'Hover Event',
                    component: HoverEventDoc
                },
                {
                    id: 'indicatorposition',
                    label: 'Position',
                    component: PositionDoc
                },
                {
                    id: 'indciatortemplate',
                    label: 'Template',
                    component: IndicatorTemplateDoc
                }
            ]
        },
        {
            id: 'thumbnail',
            label: 'Thumbnail',
            component: ThumbnailDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        },
        {
            id: 'fullscreen',
            label: 'Full Screen',
            description: 'In fullscreen mode content covers the whole page over a modal layer.',
            children: [
                {
                    id: 'fullscreenwiththumbnail',
                    label: 'With Thumbnails',
                    component: WithThumbnailsDoc
                },
                {
                    id: 'fullscreenwithoutthumnails',
                    label: 'Without Thumbnails',
                    component: WithoutThumbnailsDoc
                },
                {
                    id: 'fullscreencustom',
                    label: 'Custom Content',
                    component: CustomContentDoc
                }
            ]
        },
        {
            id: 'navigator',
            label: 'Navigator',
            description: 'Navigators are used to move back and forth between the images.',
            children: [
                {
                    id: 'itemthumbnails',
                    label: 'With Thumbnails',
                    component: ItemThumbnailsDoc
                },
                {
                    id: 'itemwithouthumbnails',
                    label: 'Without Thumbnails',
                    component: ItemWithoutThumbnailsDoc
                },
                {
                    id: 'itemhover',
                    label: 'Display on Hover',
                    component: HoverDoc
                },
                {
                    id: 'indicators',
                    label: 'With Indicators',
                    component: IndicatorsDoc
                }
            ]
        },
        {
            id: 'autoplay',
            label: 'AutoPlay',
            component: AutoPlayDoc
        },
        {
            id: 'caption',
            label: 'Caption',
            component: CaptionDoc
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Galleria', pathname: '/modules/galleria.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Gallery Component</title>
                <meta name="description" content="Galleria is a content gallery component." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Galleria</h1>
                        <p>Galleria is a content gallery component.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaDemo;
