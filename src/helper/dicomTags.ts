// DICOM Standard here: http://dicom.nema.org/medical/dicom/current/output/html/part06.html
// DICOM Tags Library: https://www.dicomlibrary.com/dicom/dicom-tags/

const dicomTags = {
  'x00100010': 'patientName',
  'x00100030': 'patientBirthdate',
  'x00080080': 'institutionName',
  'x00080012': 'instanceCreationDate',
  'x00080013': 'instanceCreationTime',
  'x00100020': 'patientID',
  'x00100040': 'patientSex',
  'x00101030': 'patientWeight',
  'x00081030': 'studyDescription',
  'x00181030': 'protocolName',
  'x00080050': 'accessionNumber',
  'x00200010': 'studyID',
  'x00080020': 'studyDate',
  'x00080030': 'studyTime',
  'x0008103e': 'seriesDescription',
  'x00200011': 'seriesNumber',
  'x00080060': 'modality',
  'x00180015': 'bodyPart',
  'x00080021': 'seriesDate',
  'x00080031': 'seriesTime',
  'x00200013': 'instanceNumber',
  'x00200012': 'acquisitionNumber',
  'x00080022': 'acquisitionDate',
  'x0008002A': 'acquisitionTime',
  'x00080012': 'instanceCreationDate',
  'x00080013': 'instanceCreationTime',
  'x00080023': 'contentDate',
  'x00080033': 'contentTime',
  'x00280010': 'rows',
  'x00280011': 'columns',
  'x00280004': 'photometricInterpretation',
  'x00080008': 'imageType',
  'x00280100': 'bitsAllocated',
  'x00280101': 'bitsStored',
  'x00280102': 'highBit',
  'x00280103': 'pixelRepresentation',
  'x00281053': 'rescaleSlope',
  'x00281052': 'rescaleIntercept',
  'x00200032': 'imagePositionPatient',
  'x00280030': 'imageOrientationPatient',
  'x00204000': 'patientPosition',
  'x00200037': 'pixelSpacing',
  'x00280002': 'samplesPerPixel',
  'x00185100': 'imageComments',
  'x00080070': 'manufacturer',
  'x00081090': 'model', // Manufacturer's Model Name
  'x00081010': 'stationName',
  'x00080055': 'AE_Title',
  'x00080080': 'institutionName',
  'x00181020': 'softwareVersion',
  'x00020013': 'implementationVersionName',
  'x00180020': 'scanningSequence',
  'x00180021': 'sequenceVariant',
  'x00180022': 'scanOptions',
  'x00180050': 'sliceThickness',
  'x00180080': 'repetitionTime',
  'x00180081': 'echoTime',
  'x00180082': 'inversionTime',
  'x00180084': 'imagingFrequency',
  'x00180085': 'imagedNucleus',
  'x00180086': 'echoNumbers',
  'x00180087': 'magneticFieldStrength',
  'x00180088': 'spacingBetweenSlices',
  'x00180089': 'numberOfPhaseEncodingSteps',
  'x00180091': 'echoTrainLength',
  'x0020000d': 'studyUID',
  'x0020000e': 'seriesUID',
  'x00080018': 'instanceUID',
  'x00080016': 'SOP_ClassUID',
  'x00020010': 'transferSyntaxUID',
  'x00200052': 'frameOfReferenceUID',
  'x00080005': 'specificCharacterSet',
  'x00080090': 'referringPhysicianName',
  'x00180023': 'MR_AcquisitionType',
  'x00180083': 'numberOfAverages',
  'x00180093': 'percentSampling',
  'x00180094': 'percentPhaseFieldOfView',
  'x00181081': 'lowRR_Value',
  'x00181082': 'highRR_Value',
  'x00181083': 'intervalsAcquired',
  'x00181084': 'intervalsRejected',
  'x00181088': 'heartRate',
  'x00181250': 'receiveCoilName',
  'x00181251': 'transmitCoilName',
  'x00181312': 'inPlanePhaseEncodingDirection',
  'x00181314': 'flipAngle',
  'x00201040': 'positionReferenceIndicator',
  'x00281050': 'windowCenter',
  'x00281051': 'windowWidth',
  '': '',
  '': '',
  '': '',
}

export default dicomTags
