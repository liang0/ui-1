import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Nav, NavItem, Tab } from 'react-bootstrap';

import talendIcons from '@talend/icons/dist/react';
import Drawer from './Drawer.component';

import ActionBar from '../ActionBar';
import HeaderBar from '../HeaderBar';
import IconsProvider from '../IconsProvider';
import Layout from '../Layout';
import SidePanel from '../SidePanel';

const header = <HeaderBar brand={{ label: 'Example App Name' }} />;

const icons = {
	'talend-arrow-left': talendIcons['talend-arrow-left'],
	'talend-check': talendIcons['talend-check'],
	'talend-dataprep': talendIcons['talend-dataprep'],
	'talend-pencil': talendIcons['talend-pencil'],
	'talend-folder': talendIcons['talend-folder'],
	'talend-plus-circle': talendIcons['talend-plus-circle'],
	'talend-star': talendIcons['talend-star'],
	'talend-cross': talendIcons['talend-cross'],
	'talend-opener': talendIcons['talend-opener'],
};

const actions = [
	{
		label: 'Preparations',
		icon: 'talend-dataprep',
		onClick: action('Preparations clicked'),
	},
	{
		label: 'Datasets',
		icon: 'talend-folder',
		onClick: action('Datasets clicked'),
	},
	{
		label: 'Favorites',
		icon: 'talend-star',
		onClick: action('Favorites clicked'),
	},
];

const cancel = {
	label: 'Cancel',
	onClick: action('You clicked me'),
	className: 'btn-inverse',
};

const primary = {
	label: 'Primary',
	bsStyle: 'primary',
	onClick: action('You clicked me'),
};

const onCancelAction = {
	label: 'Cancel',
	onClick: action('You clicked on cancel action'),
	className: 'btn-inverse',
};

const panelActions = {
	left: [cancel],
	right: [primary],
};

const multi3 = {
	label: 'multi3',
	icon: 'talend-cog',
	onClick: action('You clicked me'),
};

const multiSelectActions = {
	left: [
		{
			label: 'multi1',
			icon: 'talend-cog',
			onClick: action('You clicked me'),
		},
		{
			label: 'multi2',
			icon: 'talend-cog',
			onClick: action('You clicked me'),
		},
	],
	right: [
		multi3,
		{
			label: 'multi4',
			icon: 'talend-cog',
			onClick: action('You clicked me'),
		},
	],
};

const basicProps = {
	actions: panelActions,
	multiSelectActions,
};

const tabs = {
	id: 'tabs',
	items: [
		{
			key: 'info',
			label: 'Info',
		},
		{
			key: 'navigator',
			label: 'Navigator',
		},
		{
			key: 'profile',
			label: 'Profile',
		},
		{
			key: 'metrics',
			label: 'Metrics',
		},
	],
	onSelect: action('Tab clicked'),
	selectedKey: 'navigator',
};

const tabsActionFooter = {
	id: 'tabs',
	items: [
		{
			key: 'info',
			label: 'Info',
			footerActions: {
				actions: {
					left: [
						{
							id: 'view-left',
							key: 'view-left',
							label: 'ActionRight',
						},
					],
					center: [
						{
							id: 'view-center',
							key: 'view-center',
							label: 'ActionCenter',
						},
					],
					right: [
						{
							id: 'view-right',
							key: 'view-right',
							label: 'ActionRight',
						},
					],
				},
			},
		},
		{
			key: 'navigator',
			label: 'Navigator',
			footerActions: {
				actions: {
					left: [
						{
							id: 'view-left-hidden',
							key: 'view-left-hidden',
							bsStyle: 'danger',
							label: 'Action not visible in the tab "info"',
						},
					],
				},
			},
		},
	],
	onSelect: action('Tab clicked'),
};

function scrollableContent() {
	const content = [];
	for (let i = 1; i <= 42; i += 1) {
		content.push(<p key={i}>The scroll is defined by the content {i}</p>);
	}
	return content;
}

const drawers = [
	<Drawer
		stacked
		title="Im stacked drawer 1"
		footerActions={Object.assign({}, basicProps, { selected: 0 })}
	>
		<h1>Hello drawer 1</h1>
		<p>{"You should not being able to read this because I'm first"}</p>
	</Drawer>,
	<Drawer title="Im drawer 2" footerActions={Object.assign({}, basicProps, { selected: 0 })}>
		<h1>Hello drawer 2</h1>
		<p>The scroll is defined by the content</p>
		<h1>Hello drawer 3</h1>
		{scrollableContent()}
	</Drawer>,
];

const editableDrawers = [
	<Drawer
		stacked
		title="Im stacked drawer 1"
		footerActions={Object.assign({}, basicProps, { selected: 0 })}
	>
		<h1>Hello drawer 1</h1>
		<p>{"You should not being able to read this because I'm first"}</p>
	</Drawer>,
	<Drawer
		editableTitle
		title="Im drawer 20"
		footerActions={Object.assign({}, basicProps, { selected: 0 })}
	>
		<h1>Hello drawer 2</h1>
		<p>The scroll is defined by the content</p>
		<h1>Hello drawer 3</h1>
		{scrollableContent()}
	</Drawer>,
];

const longEditableDrawers = [
	<Drawer
		stacked
		title="Im stacked drawer 1"
		footerActions={Object.assign({}, basicProps, { selected: 0 })}
	>
		<h1>Hello drawer 1</h1>
		<p>You should not being able to read this because I'm first</p>
	</Drawer>,
	<Drawer
		editableTitle
		title="Im drawer 20 here in the long title header header header"
		footerActions={Object.assign({}, basicProps, { selected: 0 })}
		onCancelAction={onCancelAction}
	>
		<h1>Hello drawer 2</h1>
		<p>The scroll is defined by the content</p>
		<h1>Hello drawer 3</h1>
		{scrollableContent()}
	</Drawer>,
];

const drawersNoTransition = [
	<Drawer
		route={{ state: { withTransition: false } }}
		stacked
		title="Im stacked drawer 1"
		footerActions={Object.assign({}, basicProps, { selected: 0 })}
	>
		<h1>Hello drawer 1</h1>
		<p>{"You should not being able to read this because I'm first"}</p>
	</Drawer>,
	<Drawer
		withTransition={false}
		title="Im drawer 2"
		footerActions={Object.assign({}, basicProps, { selected: 0 })}
	>
		<h1>Hello drawer 2</h1>
		<p>The scroll is defined by the content</p>
		<h1>Hello drawer 3</h1>
		{scrollableContent()}
	</Drawer>,
];

const sidePanel = <SidePanel actions={actions} />;
const twentyRows = [];
for (let index = 0; index < 20; index++) {
	twentyRows.push(<p key={index}>The content dictate the width</p>);
}
storiesOf('Layout/Drawer', module)
	.add('Layout 1 column', () => (
		<Layout header={header} mode="OneColumns" drawers={drawers}>
			<span>zone with drawer</span>
			{twentyRows}
			<IconsProvider defaultIcons={icons} />
		</Layout>
	))
	.add('Layout 2 columns', () => (
		<Layout header={header} mode="TwoColumns" one={sidePanel} drawers={drawers}>
			<span>zone with drawer</span>
			{twentyRows}
			<IconsProvider defaultIcons={icons} />
		</Layout>
	))
	.add('with editable header', () => (
		<Layout header={header} mode="TwoColumns" one={sidePanel} drawers={editableDrawers}>
			<span>zone with drawer</span>
			{twentyRows}
			<IconsProvider defaultIcons={icons} />
		</Layout>
	))
	.add('with long editable header', () => (
		<Layout header={header} mode="TwoColumns" one={sidePanel} drawers={longEditableDrawers}>
			<span>zone with drawer</span>
			{twentyRows}
			<IconsProvider defaultIcons={icons} />
		</Layout>
	))
	.add('Default with no transition', () => (
		<Layout header={header} mode="TwoColumns" one={sidePanel} drawers={drawersNoTransition}>
			<span>zone with drawer</span>
			{twentyRows}
			<IconsProvider defaultIcons={icons} />
		</Layout>
	))
	.add('stacked drawers', () => {
		const stackedDrawers = [
			<Drawer
				stacked
				title="I'm stacked drawer 1"
				footerActions={Object.assign({}, basicProps, { selected: 0 })}
			>
				<h1>Hello drawer 1</h1>
				<p>{"You should not being able to read this because I'm first"}</p>
			</Drawer>,
			<Drawer
				stacked
				title="I'm drawer 2"
				footerActions={Object.assign({}, basicProps, { selected: 0 })}
			>
				<h1>Hello drawer 2</h1>
				<p>The scroll is defined by the content</p>
				{scrollableContent()}
			</Drawer>,
			<Drawer
				stacked
				title="I'm drawer 3"
				footerActions={Object.assign({}, basicProps, { selected: 0 })}
			>
				<h1>Hello drawer 3</h1>
				<p>The scroll is defined by the content</p>
				{scrollableContent()}
			</Drawer>,
		];
		const fiftyRows = [];
		for (let index = 0; index < 50; index++) {
			fiftyRows.push(<p key={index}>The content dictate the width</p>);
		}
		return (
			<Layout header={header} mode="TwoColumns" one={sidePanel} drawers={stackedDrawers}>
				<span>zone with drawer</span>
				{fiftyRows}
				<IconsProvider defaultIcons={icons} />
			</Layout>
		);
	})
	.add('With tabs', () => {
		const drawersWithTabs = [
			<Drawer stacked title="I'm a stacked drawer with tabs" footerActions={basicProps} tabs={tabs}>
				<p>The content</p>
			</Drawer>,
			<Drawer title="I'm a drawer with tabs" footerActions={basicProps} tabs={tabs}>
				<p>The content</p>
			</Drawer>,
		];
		return (
			<Layout header={header} mode="TwoColumns" one={sidePanel} drawers={drawersWithTabs}>
				<span>zone with drawer</span>
				<IconsProvider defaultIcons={icons} />
			</Layout>
		);
	})
	.add('With tabs with specific footers', () => {
		const drawersWithTabs = [
			<Drawer
				stacked
				title="I'm a stacked drawer with tabs"
				selectedTabKey={'info'}
				tabs={tabsActionFooter}
			>
				<p>This tab contain specific actions in left, center and right parts of the footer.</p>
				<p>
					An other specific action with the label "Action not visible in the tab 'info'" is define
					in the tab "navigator" but not visible in the tab "info".
				</p>
			</Drawer>,
			<Drawer title="I'm a drawer with tabs" selectedTabKey={'info'} tabs={tabsActionFooter}>
				<p>This tab contain specific actions in left, center and right parts of the footer.</p>
				<p>
					An other specific action with the label "Action not visible in the tab 'info'" is define
					in the tab "navigator" but not visible in the tab "info".
				</p>
			</Drawer>,
		];
		return (
			<Layout header={header} mode="TwoColumns" one={sidePanel} drawers={drawersWithTabs}>
				<span>zone with drawer</span>
				<IconsProvider defaultIcons={icons} />
			</Layout>
		);
	})
	.add('Custom', () => {
		function CustomDrawer() {
			return (
				<Drawer.Container>
					<Tab.Container defaultActiveKey="info" id="custom">
						<div style={{ flexGrow: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
							<Drawer.Title
								title="Custom drawer with tabs and a super long name that breaks the drawer title"
								onCancelAction={onCancelAction}
							>
								<Nav bsClass="nav nav-tabs">
									<NavItem componentClass="button" eventKey="info">
										Info
									</NavItem>
									<NavItem componentClass="button" eventKey="navigator">
										Navigator
									</NavItem>
									<NavItem componentClass="button" eventKey="profile">
										Profile
									</NavItem>
									<NavItem componentClass="button" eventKey="metrics">
										Metrics
									</NavItem>
								</Nav>
							</Drawer.Title>
							<Tab.Content animation>
								<Tab.Pane eventKey="info">
									<Drawer.Content>{scrollableContent()}</Drawer.Content>
									<Drawer.Footer>Test</Drawer.Footer>
								</Tab.Pane>
								<Tab.Pane eventKey="navigator">
									<Drawer.Content>{scrollableContent()}</Drawer.Content>
									<Drawer.Footer />
								</Tab.Pane>
								<Tab.Pane eventKey="profile">
									<Drawer.Content>{scrollableContent()}</Drawer.Content>
									<Drawer.Footer />
								</Tab.Pane>
								<Tab.Pane eventKey="metrics">
									<Drawer.Content>{scrollableContent()}</Drawer.Content>
									<Drawer.Footer />
								</Tab.Pane>
							</Tab.Content>
						</div>
					</Tab.Container>
				</Drawer.Container>
			);
		}
		return (
			<Layout header={header} mode="TwoColumns" one={sidePanel} drawers={[<CustomDrawer />]}>
				<span>zone with drawer</span>
				<IconsProvider defaultIcons={icons} />
			</Layout>
		);
	})
	.add('Custom stacked', () => {
		// Use same cancel action props with className for Title and Footer
		const sameCancelAction = panelActions.left[0];
		function CustomDrawer() {
			return (
				<Drawer.Container stacked>
					<Tab.Container defaultActiveKey="info" id="info">
						<div style={{ flexGrow: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
							<Drawer.Title
								title="Custom drawer with tabs and a super long name that breaks the drawer title"
								onCancelAction={sameCancelAction}
							/>
							<Tab.Content>
								<Drawer.Content>{scrollableContent()}</Drawer.Content>
								<Drawer.Footer>
									<ActionBar actions={panelActions} />
								</Drawer.Footer>
							</Tab.Content>
						</div>
					</Tab.Container>
				</Drawer.Container>
			);
		}
		return (
			<Layout header={header} mode="TwoColumns" one={sidePanel} drawers={[<CustomDrawer />]}>
				<span>zone with drawer</span>
				<IconsProvider defaultIcons={icons} />
			</Layout>
		);
	});
