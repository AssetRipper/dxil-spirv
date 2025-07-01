#version 460

layout(set = 1, binding = 0) uniform texture1D _8;
layout(set = 1, binding = 1) uniform texture1DArray _11;
layout(set = 1, binding = 2) uniform texture2D _14;
layout(set = 1, binding = 3) uniform texture2DArray _17;
layout(set = 1, binding = 4) uniform texture3D _20;
layout(set = 1, binding = 5) uniform textureCube _23;
layout(set = 1, binding = 6) uniform textureCubeArray _26;
layout(set = 0, binding = 0) uniform sampler _29;

layout(location = 0) in vec4 TEXCOORD;
layout(location = 0) out vec2 SV_Target;

void main()
{
    vec4 _61 = texture(sampler1D(_8, _29), TEXCOORD.x);
    vec4 _71 = texture(sampler2D(_14, _29), vec2(TEXCOORD.x, TEXCOORD.y));
    vec4 _83 = texture(sampler3D(_20, _29), vec3(TEXCOORD.x, TEXCOORD.y, TEXCOORD.z));
    vec4 _89 = texture(samplerCube(_23, _29), vec3(TEXCOORD.x, TEXCOORD.y, TEXCOORD.z));
    float _99 = texture(samplerCubeArray(_26, _29), vec4(TEXCOORD.x, TEXCOORD.y, TEXCOORD.z, TEXCOORD.w)).x + (texture(sampler2DArray(_17, _29), vec3(TEXCOORD.x, TEXCOORD.y, TEXCOORD.z)).x + texture(sampler1DArray(_11, _29), vec2(TEXCOORD.x, TEXCOORD.y)).x);
    SV_Target.x = (((_99 + _61.x) + _71.x) + _83.x) + _89.x;
    SV_Target.y = (((_99 + _61.y) + _71.y) + _83.y) + _89.y;
}


#if 0
// SPIR-V disassembly
; SPIR-V
; Version: 1.3
; Generator: Unknown(30017); 21022
; Bound: 113
; Schema: 0
OpCapability Shader
OpCapability Sampled1D
OpCapability SampledCubeArray
OpMemoryModel Logical GLSL450
OpEntryPoint Fragment %3 "main" %32 %35
OpExecutionMode %3 OriginUpperLeft
OpName %3 "main"
OpName %32 "TEXCOORD"
OpName %35 "SV_Target"
OpDecorate %8 DescriptorSet 1
OpDecorate %8 Binding 0
OpDecorate %11 DescriptorSet 1
OpDecorate %11 Binding 1
OpDecorate %14 DescriptorSet 1
OpDecorate %14 Binding 2
OpDecorate %17 DescriptorSet 1
OpDecorate %17 Binding 3
OpDecorate %20 DescriptorSet 1
OpDecorate %20 Binding 4
OpDecorate %23 DescriptorSet 1
OpDecorate %23 Binding 5
OpDecorate %26 DescriptorSet 1
OpDecorate %26 Binding 6
OpDecorate %29 DescriptorSet 0
OpDecorate %29 Binding 0
OpDecorate %32 Location 0
OpDecorate %35 Location 0
%1 = OpTypeVoid
%2 = OpTypeFunction %1
%5 = OpTypeFloat 32
%6 = OpTypeImage %5 1D 0 0 0 1 Unknown
%7 = OpTypePointer UniformConstant %6
%8 = OpVariable %7 UniformConstant
%9 = OpTypeImage %5 1D 0 1 0 1 Unknown
%10 = OpTypePointer UniformConstant %9
%11 = OpVariable %10 UniformConstant
%12 = OpTypeImage %5 2D 0 0 0 1 Unknown
%13 = OpTypePointer UniformConstant %12
%14 = OpVariable %13 UniformConstant
%15 = OpTypeImage %5 2D 0 1 0 1 Unknown
%16 = OpTypePointer UniformConstant %15
%17 = OpVariable %16 UniformConstant
%18 = OpTypeImage %5 3D 0 0 0 1 Unknown
%19 = OpTypePointer UniformConstant %18
%20 = OpVariable %19 UniformConstant
%21 = OpTypeImage %5 Cube 0 0 0 1 Unknown
%22 = OpTypePointer UniformConstant %21
%23 = OpVariable %22 UniformConstant
%24 = OpTypeImage %5 Cube 0 1 0 1 Unknown
%25 = OpTypePointer UniformConstant %24
%26 = OpVariable %25 UniformConstant
%27 = OpTypeSampler
%28 = OpTypePointer UniformConstant %27
%29 = OpVariable %28 UniformConstant
%30 = OpTypeVector %5 4
%31 = OpTypePointer Input %30
%32 = OpVariable %31 Input
%33 = OpTypeVector %5 2
%34 = OpTypePointer Output %33
%35 = OpVariable %34 Output
%44 = OpTypePointer Input %5
%46 = OpTypeInt 32 0
%47 = OpConstant %46 0
%50 = OpConstant %46 1
%53 = OpConstant %46 2
%56 = OpConstant %46 3
%58 = OpTypeSampledImage %6
%60 = OpConstant %5 0
%64 = OpTypeSampledImage %9
%69 = OpTypeSampledImage %12
%75 = OpTypeSampledImage %15
%78 = OpTypeVector %5 3
%81 = OpTypeSampledImage %18
%87 = OpTypeSampledImage %21
%93 = OpTypeSampledImage %24
%108 = OpTypePointer Output %5
%3 = OpFunction %1 None %2
%4 = OpLabel
OpBranch %111
%111 = OpLabel
%36 = OpLoad %24 %26
%37 = OpLoad %21 %23
%38 = OpLoad %18 %20
%39 = OpLoad %15 %17
%40 = OpLoad %12 %14
%41 = OpLoad %9 %11
%42 = OpLoad %6 %8
%43 = OpLoad %27 %29
%45 = OpAccessChain %44 %32 %47
%48 = OpLoad %5 %45
%49 = OpAccessChain %44 %32 %50
%51 = OpLoad %5 %49
%52 = OpAccessChain %44 %32 %53
%54 = OpLoad %5 %52
%55 = OpAccessChain %44 %32 %56
%57 = OpLoad %5 %55
%59 = OpSampledImage %58 %42 %43
%61 = OpImageSampleImplicitLod %30 %59 %48 None
%62 = OpCompositeExtract %5 %61 0
%63 = OpCompositeExtract %5 %61 1
%65 = OpSampledImage %64 %41 %43
%67 = OpCompositeConstruct %33 %48 %51
%66 = OpImageSampleImplicitLod %30 %65 %67 None
%68 = OpCompositeExtract %5 %66 0
%70 = OpSampledImage %69 %40 %43
%72 = OpCompositeConstruct %33 %48 %51
%71 = OpImageSampleImplicitLod %30 %70 %72 None
%73 = OpCompositeExtract %5 %71 0
%74 = OpCompositeExtract %5 %71 1
%76 = OpSampledImage %75 %39 %43
%79 = OpCompositeConstruct %78 %48 %51 %54
%77 = OpImageSampleImplicitLod %30 %76 %79 None
%80 = OpCompositeExtract %5 %77 0
%82 = OpSampledImage %81 %38 %43
%84 = OpCompositeConstruct %78 %48 %51 %54
%83 = OpImageSampleImplicitLod %30 %82 %84 None
%85 = OpCompositeExtract %5 %83 0
%86 = OpCompositeExtract %5 %83 1
%88 = OpSampledImage %87 %37 %43
%90 = OpCompositeConstruct %78 %48 %51 %54
%89 = OpImageSampleImplicitLod %30 %88 %90 None
%91 = OpCompositeExtract %5 %89 0
%92 = OpCompositeExtract %5 %89 1
%94 = OpSampledImage %93 %36 %43
%96 = OpCompositeConstruct %30 %48 %51 %54 %57
%95 = OpImageSampleImplicitLod %30 %94 %96 None
%97 = OpCompositeExtract %5 %95 0
%98 = OpFAdd %5 %80 %68
%99 = OpFAdd %5 %97 %98
%100 = OpFAdd %5 %99 %62
%101 = OpFAdd %5 %100 %73
%102 = OpFAdd %5 %101 %85
%103 = OpFAdd %5 %102 %91
%104 = OpFAdd %5 %99 %63
%105 = OpFAdd %5 %104 %74
%106 = OpFAdd %5 %105 %86
%107 = OpFAdd %5 %106 %92
%109 = OpAccessChain %108 %35 %47
OpStore %109 %103
%110 = OpAccessChain %108 %35 %50
OpStore %110 %107
OpReturn
OpFunctionEnd
#endif
