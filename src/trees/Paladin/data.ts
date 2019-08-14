import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/paladin"),
);
const icons = requireAll(require.context("../../assets/icons/paladin"));

export const data: TalentData = {
  Holy: {
    name: "Holy",
    background: backgrounds["holy"],
    icon: icons["spell_holy_holybolt"],
    talents: {
      "Divine Strength": {
        name: "Divine Strength",
        pos: "a2",
        icon: icons["spell_holy_auraoflight"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your Strength by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Divine Intellect": {
        name: "Divine Intellect",
        pos: "a3",
        icon: icons["spell_nature_sleep"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your total Intellect by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Spiritual Focus": {
        name: "Spiritual Focus",
        pos: "b2",
        icon: icons["spell_arcane_blink"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives your Flash of Light and Holy Light spells a ${[
          14,
          28,
          42,
          56,
          70,
        ]}% chance to not lose casting time when you take damage.`,
      },
      "Improved Seal of Righteousness": {
        name: "Improved Seal of Righteousness",
        pos: "b3",
        icon: icons["ability_thunderbolt"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the damage done by your Seal of Righteousness by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Healing Light": {
        name: "Healing Light",
        pos: "c1",
        icon: icons["spell_holy_holybolt"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the amount healed by your Holy Light and Flash of Light spells by ${[
          4,
          8,
          12,
        ]}%.`,
      },
      Consecration: {
        name: "Consecration",
        pos: "c2",
        icon: icons["spell_holy_innerfire"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Consecrates the land beneath the Paladin, doing 64 Holy damage over 8 sec to enemies who enter the area.`,
      },
      "Improved Lay on Hands": {
        name: "Improved Lay on Hands",
        pos: "c3",
        icon: icons["spell_holy_layonhands"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives the target of your Lay on Hands spell a ${[
          15,
          30,
        ]}% bonus to their armor value from items for 2 min. In addition, the cooldown of your Lay on Hands spell is reduced by ${[
          10,
          20,
        ]} min.`,
      },
      "Unyielding Faith": {
        name: "Unyielding Faith",
        pos: "c4",
        icon: icons["spell_holy_unyieldingfaith"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases your chance to resist Fear and Disorient effects by an additional ${[
          5,
          10,
        ]}%.`,
      },
      Illumination: {
        name: "Illumination",
        pos: "d2",
        icon: icons["spell_holy_greaterheal"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to gain Mana equal to the base cost of the spell.`,
      },
      "Improved Blessing of Wisdom": {
        name: "Improved Blessing of Wisdom",
        pos: "d3",
        icon: icons["spell_holy_sealofwisdom"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the effect of your Blessing of Wisdom spell by ${[
          10,
          20,
        ]}%.`,
      },
      "Divine Favor": {
        name: "Divine Favor",
        pos: "e2",
        icon: icons["spell_holy_heal"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Illumination",
        arrows: [{ dir: "down", from: "d2", to: "e2" }],
        description: talentText`When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance.`,
      },
      "Lasting Judgement": {
        name: "Lasting Judgement",
        pos: "e3",
        icon: icons["spell_holy_healingaura"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the duration of your Judgement of Light and Judgement of Wisdom by ${[
          10,
          20,
          30,
        ]} sec.`,
      },
      "Holy Power": {
        name: "Holy Power",
        pos: "f3",
        icon: icons["spell_holy_power"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the critical effect chance of your Holy Spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Holy Shock": {
        name: "Holy Shock",
        pos: "g2",
        icon: icons["spell_holy_searinglight"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Divine Favor",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Blasts the target with Holy energy, causing 204 to 220 Holy damage to an enemy, or 204 to 220 healing to an ally.`,
      },
    },
  },
  Protection: {
    name: "Protection",
    background: backgrounds["protection"],
    icon: icons["spell_holy_devotionaura"],
    talents: {
      "Improved Devotion Aura": {
        name: "Improved Devotion Aura",
        pos: "a2",
        icon: icons["spell_holy_devotionaura"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the armor bonus of your Devotion Aura by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      Redoubt: {
        name: "Redoubt",
        pos: "a3",
        icon: icons["ability_defend"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to block attacks with your shield by ${[
          6,
          12,
          18,
          24,
          30,
        ]}% after being the victim of a critical strike. Lasts 10 sec or 5 blocks.`,
      },
      Precision: {
        name: "Precision",
        pos: "b1",
        icon: icons["ability_rogue_ambush"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases your chance to hit with melee weapons by ${[
          1,
          2,
          3,
        ]}%.`,
      },
      "Guardian's Favor": {
        name: "Guardian's Favor",
        pos: "b2",
        icon: icons["spell_holy_sealofprotection"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Blessing of Protection by ${[
          60,
          120,
        ]} sec and increases the duration of your Blessing of Freedom by ${[
          3,
          6,
        ]} sec.`,
      },
      Toughness: {
        name: "Toughness",
        pos: "b4",
        icon: icons["spell_holy_devotion"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your armor value from items by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Blessing of Kings": {
        name: "Blessing of Kings",
        pos: "c1",
        icon: icons["spell_magic_magearmor"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Places a Blessing on a friendly target, increasing total stats by 10% for 5 min. Players may only have one Blessing on them per Paladin at any one time.`,
      },
      "Improved Righteous Fury": {
        name: "Improved Righteous Fury",
        pos: "c2",
        icon: icons["spell_holy_sealoffury"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the amount of threat generated by your Righteous Fury spell by ${[
          16,
          33,
          50,
        ]}%.`,
      },
      "Sheild Specialization": {
        name: "Sheild Specialization",
        pos: "c3",
        icon: icons["inv_shield_06"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Redoubt",
        arrows: [{ dir: "down", from: "a3", to: "c3" }],
        description: talentText`Increases the amount of damage absorbed by your sheild by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      Anticipation: {
        name: "Anticipation",
        pos: "c4",
        icon: icons["spell_magic_lesserinvisibilty"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases your Defense skill by ${[
          2,
          4,
          6,
          8,
          10,
        ]}.`,
      },
      "Improved Hammer of Justice": {
        name: "Improved Hammer of Justice",
        pos: "d2",
        icon: icons["spell_holy_sealofmight"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Decreases the cooldown of your Hammer of Justice spell by ${[
          5,
          10,
          15,
        ]} sec.`,
      },
      "Improved Concentration Aura": {
        name: "Improved Concentration Aura",
        pos: "d3",
        icon: icons["spell_holy_mindsooth"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the effect of your Concentration Aura by an additional ${[
          5,
          10,
          15,
        ]}% and gives all group members affected by the aura an additional ${[
          5,
          10,
          15,
        ]}% chance to resist Silence and Interrupt effects.`,
      },
      "Blessing of Sanctuary": {
        name: "Blessing of Sanctuary",
        pos: "e2",
        icon: icons["spell_nature_lightningshield"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 10 for 5 min. In addition, when the target blocks a melee attack the attacker will take 14 Holy damage. Players may only have one Blessing on them per Paladin at any one time.`,
      },
      Reckoning: {
        name: "Reckoning",
        pos: "e3",
        icon: icons["spell_holy_blessingofstrength"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Gives you a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to gain an extra attack after being the victim of a critical strike.`,
      },
      "One-Handed Weapon Specialization": {
        name: "One-Handed Weapon Specialization",
        pos: "f3",
        icon: icons["inv_sword_20"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage you deal with one-handed melee weapons by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Holy Shield": {
        name: "Holy Shield",
        pos: "g2",
        icon: icons["classic_spell_holy_blessingofprotection"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Blessing of Sanctuary",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Increases chance to block by 30% for 10 sec, and deals 65 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges.`,
      },
    },
  },
  Retribution: {
    name: "Retribution",
    background: backgrounds["retribution"],
    icon: icons["spell_holy_auraoflight"],
    talents: {
      "Improved Blessing of Might": {
        name: "Improved Blessing of Might",
        pos: "a2",
        icon: icons["spell_holy_fistofjustice"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the melee attack power bonus of your Blessing of Might by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      Benediction: {
        name: "Benediction",
        pos: "a3",
        icon: icons["spell_frost_windwalkon"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the Mana cost of your Judgement and Seal spells by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Improved Judgement": {
        name: "Improved Judgement",
        pos: "b1",
        icon: icons["spell_holy_righteousfury"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Decreases the cooldown of your Judgement spell by ${[
          1,
          2,
        ]} sec.`,
      },
      "Improved Seal of the Crusader": {
        name: "Improved Seal of the Crusader",
        pos: "b2",
        icon: icons["spell_holy_holysmite"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the melee attack power bonus of your Seal of the Crusader and the Holy damage increase of your Judgement of the Crusader by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      Deflection: {
        name: "Deflection",
        pos: "b3",
        icon: icons["ability_parry"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your Parry chance by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      Vindication: {
        name: "Vindication",
        pos: "c1",
        icon: icons["spell_holy_vindication"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Gives the Paladin's damaging melee attacks a chance to reduce the target's Strength and Agility by ${[
          5,
          10,
          15,
        ]}% for 10 sec.`,
      },
      Conviction: {
        name: "Conviction",
        pos: "c2",
        icon: icons["spell_holy_retributionaura"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases your chance to get a critical strike with melee weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Seal of Command": {
        name: "Seal of Command",
        pos: "c3",
        icon: icons["ability_warrior_innerrage"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Gives the Paladin a chance to deal Holy damage equal to 70% of normal weapon damage. Only one Seal can be active on the Paladin at any one time. Lasts 30 sec.\n\nUnleashing this Seal's energy will judge an enemy, instantly causing 90 to 95 Holy damage, 137 to 146 if the target is stunned or incapacitated.`,
      },
      "Pursuit of Justice": {
        name: "Pursuit of Justice",
        pos: "c4",
        icon: icons["spell_holy_persuitofjustice"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases movement and mounted movement speed by ${[
          4,
          8,
        ]}%. This does not stack with other movement speed increasing effects.`,
      },
      "Eye for an Eye": {
        name: "Eye for an Eye",
        pos: "d1",
        icon: icons["spell_holy_eyeforaneye"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`All spell criticals against you cause ${[
          15,
          30,
        ]}% of the damage taken to the caster as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.`,
      },
      "Improved Retribution Aura": {
        name: "Improved Retribution Aura",
        pos: "d3",
        icon: icons["spell_holy_auraoflight"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the damage done by your Retribution Aura by ${[
          25,
          50,
        ]}%.`,
      },
      "Two-Handed Weapon Specialization": {
        name: "Two-Handed Weapon Specialization",
        pos: "e1",
        icon: icons["inv_hammer_04"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the damage you deal with two-handed melee weapons by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Sanctity Aura": {
        name: "Sanctity Aura",
        pos: "e3",
        icon: icons["spell_holy_mindvision"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases Holy damage done by party members within 30 yards by 10%. Players may only have one Aura on them per Paladin at any one time.`,
      },
      Vengence: {
        name: "Vengence",
        pos: "f2",
        icon: icons["ability_racial_avatar"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Conviction",
        arrows: [{ dir: "down", from: "c2", to: "f2" }],
        description: talentText`Gives you a ${[
          3,
          6,
          9,
          12,
          15,
        ]}% bonus to Physical and Holy damage you deal for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.`,
      },
      Repentence: {
        name: "Repentence",
        pos: "g2",
        icon: icons["spell_holy_prayerofhealing"],
        maxRank: 1,
        reqPoints: 30,
        description: talentText`Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids.`,
      },
    },
  },
};
