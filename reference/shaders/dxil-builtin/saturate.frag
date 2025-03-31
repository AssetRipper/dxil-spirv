#version 460
#extension GL_EXT_spirv_intrinsics : require

layout(location = 0) in float A;
layout(location = 0) out float SV_Target;

spirv_instruction(set = "GLSL.std.450", id = 81) float spvNClamp(float, float, float);
spirv_instruction(set = "GLSL.std.450", id = 81) vec2 spvNClamp(vec2, vec2, vec2);
spirv_instruction(set = "GLSL.std.450", id = 81) vec3 spvNClamp(vec3, vec3, vec3);
spirv_instruction(set = "GLSL.std.450", id = 81) vec4 spvNClamp(vec4, vec4, vec4);

void main()
{
    SV_Target = spvNClamp(A, 0.0, 1.0);
}


#if 0
// SPIR-V disassembly
; SPIR-V
; Version: 1.3
; Generator: Unknown(30017); 21022
; Bound: 17
; Schema: 0
OpCapability Shader
%11 = OpExtInstImport "GLSL.std.450"
OpMemoryModel Logical GLSL450
OpEntryPoint Fragment %3 "main" %7 %9
OpExecutionMode %3 OriginUpperLeft
OpName %3 "main"
OpName %7 "A"
OpName %9 "SV_Target"
OpDecorate %7 Location 0
OpDecorate %9 Location 0
%1 = OpTypeVoid
%2 = OpTypeFunction %1
%5 = OpTypeFloat 32
%6 = OpTypePointer Input %5
%7 = OpVariable %6 Input
%8 = OpTypePointer Output %5
%9 = OpVariable %8 Output
%12 = OpConstant %5 0
%13 = OpConstant %5 1
%3 = OpFunction %1 None %2
%4 = OpLabel
OpBranch %15
%15 = OpLabel
%10 = OpLoad %5 %7
%14 = OpExtInst %5 %11 NClamp %10 %12 %13
OpStore %9 %14
OpReturn
OpFunctionEnd
#endif
