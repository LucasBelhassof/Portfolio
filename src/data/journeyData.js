const timelineMeta = [
  { id: 'vipnote', side: 'right' },
  { id: 'five', side: 'right' },
  { id: 'projects', side: 'left' },
  { id: 'imovel-guide', side: 'right' },
  { id: 'aprovei', side: 'right' },
  { id: 'today', side: 'left' },
];

export const getJourneyTimeline = (t) =>
  timelineMeta.map((item) => ({
    id: item.id,
    side: item.side,
    ...t(`journey.timeline.${item.id}`, {
      returnObjects: true,
    }),
  }));
