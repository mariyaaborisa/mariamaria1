(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var rootElement = document.getElementById('react-spotlight-root');

        if (!rootElement || typeof window.React === 'undefined' || typeof window.ReactDOM === 'undefined') {
            return;
        }

        var e = window.React.createElement;
        var useMemo = window.React.useMemo;
        var useState = window.React.useState;

        var spotlightData = [
            {
                id: 'employers',
                title: 'Product Impact Narrative',
                subtitle: 'Hiring Managers',
                summary: 'Surface concise stories that connect your research craft to measurable product or policy outcomes.',
                recommendations: [
                    'Pair each flagship project with before/after metrics or a quote from a stakeholder describing the impact.',
                    'Add a “Rapid Experimentation” callout that links to Figma files, decision logs, or sprint retrospectives.',
                    'Highlight collaboration muscles by naming cross-functional partners—trust & safety ops, policy, engineering—and your role in aligning them.'
                ],
                metrics: ['Impact metrics', 'Cross-functional partners', 'Decision logs']
            },
            {
                id: 'fellowships',
                title: 'Mission & Scholarship Alignment',
                subtitle: 'Fellowship Committees',
                summary: 'Connect your community work and research questions to the specific values of fellowships or grants.',
                recommendations: [
                    'Create a fellowship-specific one pager with a problem statement, methodological approach, and anticipated community benefit.',
                    'Document long-term research threads—digital childhoods, environmental justice—and show how each project advances them.',
                    'Embed a short video or audio reflection to humanize your motivation for safety and equity work.'
                ],
                metrics: ['Community benefit', 'Long-form research arcs', 'Multimedia storytelling']
            },
            {
                id: 'collaborators',
                title: 'Open Collaboration Signals',
                subtitle: 'Allies & Co-founders',
                summary: 'Invite peers into future-making by listing collaboration opportunities and tooling preferences.',
                recommendations: [
                    'Add a living roadmap of experiments seeking feedback—curriculum pilots, safety tooling, or policy prototypes.',
                    'List your preferred collaboration stack (Notion, Observable, GitHub) and how you like to run co-design sessions.',
                    'Offer a lightweight intake form for community partners to request workshops or audits.'
                ],
                metrics: ['Roadmap teasers', 'Tooling transparency', 'Intake flows']
            }
        ];

        function SpotlightButton(props) {
            var item = props.item;
            var isActive = props.isActive;
            var onSelect = props.onSelect;

            return e(
                'button',
                {
                    type: 'button',
                    className: 'react-spotlight__button',
                    'aria-pressed': isActive ? 'true' : 'false',
                    onClick: function () { return onSelect(item.id); }
                },
                e('span', { className: 'react-spotlight__button-subtitle' }, item.subtitle),
                e('span', { className: 'react-spotlight__button-title' }, item.title)
            );
        }

        function SpotlightDetail(props) {
            var item = props.item;

            return e(
                'div',
                { className: 'react-spotlight__detail' },
                e('h3', { className: 'react-spotlight__detail-heading' }, item.title),
                e('p', { className: 'react-spotlight__detail-summary' }, item.summary),
                e(
                    'ul',
                    { className: 'react-spotlight__recommendations' },
                    item.recommendations.map(function (tip, index) {
                        return e('li', { key: item.id + '-rec-' + index }, tip);
                    })
                ),
                e(
                    'div',
                    { className: 'react-spotlight__metrics', role: 'list' },
                    item.metrics.map(function (metric) {
                        return e('span', { className: 'react-spotlight__metric', key: item.id + '-metric-' + metric }, metric);
                    })
                )
            );
        }

        function SpotlightApp() {
            var initialId = spotlightData[0].id;
            var _a = useState(initialId), activeId = _a[0], setActiveId = _a[1];

            var activeItem = useMemo(function () {
                return spotlightData.find(function (entry) { return entry.id === activeId; }) || spotlightData[0];
            }, [activeId]);

            return e(
                'div',
                { className: 'react-spotlight' },
                e(
                    'div',
                    { className: 'react-spotlight__list', role: 'tablist', 'aria-label': 'Audience recommendations' },
                    spotlightData.map(function (item) {
                        return e(SpotlightButton, {
                            key: item.id,
                            item: item,
                            isActive: item.id === activeId,
                            onSelect: setActiveId
                        });
                    })
                ),
                e(SpotlightDetail, { item: activeItem })
            );
        }

        var root = window.ReactDOM.createRoot(rootElement);
        root.render(e(SpotlightApp));
    });
}());
