export default {
  circles: {
    entrances: [
      'in:circle:center',
      'in:circle:top-right',
      'in:circle:top-left',
      'in:circle:bottom-right',
      'in:circle:bottom-left',
    ],
    exits: [
      'out:circle:center',
      'out:circle:top-right',
      'out:circle:top-left',
      'out:circle:bottom-right',
      'out:circle:bottom-left',
    ],
  },
  squares: {
    entrances: [
      'in:square:center',
      'in:square:top-right',
      'in:square:top-left',
      'in:square:bottom-right',
      'in:square:bottom-left',
    ],
    exits: [
      'out:square:center',
      'out:square:top-right',
      'out:square:top-left',
      'out:square:bottom-right',
      'out:square:bottom-left',
    ],
  },
  wipes: {
    entrances: [
      'in:wipe:right',
      'in:wipe:left',
      'in:wipe:up',
      'in:wipe:down',
      'in:wipe:top-right',
      'in:wipe:top-left',
      'in:wipe:bottom-up',
      'in:wipe:bottom-down',
    ],
    exits: [
      'out:wipe:right',
      'out:wipe:left',
      'out:wipe:up',
      'out:wipe:down',
      'out:wipe:top-right',
      'out:wipe:top-left',
      'out:wipe:bottom-up',
      'out:wipe:bottom-down',
    ],
  },
  polygons: {
    entrances: [
      'in:diamond:center',
      'in:polygon:opposing-corners',
    ],
    exits: [
      'out:diamond:center',
      'out:polygon:opposing-corners',
    ],
  },
  custom: {
    entrances: [
      'in:custom:circle-swoop',
    ]
  }
}