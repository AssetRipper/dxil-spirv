#version 460
#extension GL_ARB_sparse_texture2 : require

struct SparseTexel
{
    uint _m0;
    float _m1;
};

struct _64
{
    float _m0;
    float _m1;
    float _m2;
    float _m3;
    uint _m4;
};

layout(set = 1, binding = 0) uniform texture1D _8;
layout(set = 1, binding = 1) uniform texture1DArray _11;
layout(set = 1, binding = 2) uniform texture2D _14;
layout(set = 1, binding = 3) uniform texture2DArray _17;
layout(set = 1, binding = 5) uniform textureCube _20;
layout(set = 1, binding = 6) uniform textureCubeArray _23;
layout(set = 0, binding = 0) uniform samplerShadow _26;

layout(location = 0) in vec4 TEXCOORD;
layout(location = 0) out vec2 SV_Target;

void main()
{
    uint _152;
    float _153;
    _152 = sparseTextureOffsetARB(sampler1DShadow(_8, _26), vec2(TEXCOORD.x, TEXCOORD.w), 1, _153);
    SparseTexel _61 = SparseTexel(_152, _153);
    float _63 = _61._m1;
    _64 _65 = _64(_63, _63, _63, _63, _61._m0);
    uint _154;
    float _155;
    _154 = sparseTextureOffsetARB(sampler1DArrayShadow(_11, _26), vec3(vec2(TEXCOORD.x, TEXCOORD.y), TEXCOORD.w), 2, _155);
    SparseTexel _77 = SparseTexel(_154, _155);
    float _80 = _77._m1;
    _64 _81 = _64(_80, _80, _80, _80, _77._m0);
    uint _156;
    float _157;
    _156 = sparseTextureOffsetARB(sampler2DShadow(_14, _26), vec3(vec2(TEXCOORD.x, TEXCOORD.y), TEXCOORD.w), ivec2(1, 2), _157);
    SparseTexel _91 = SparseTexel(_156, _157);
    float _96 = _91._m1;
    _64 _97 = _64(_96, _96, _96, _96, _91._m0);
    uint _158;
    float _159;
    _158 = sparseTextureOffsetARB(sampler2DArrayShadow(_17, _26), vec4(vec3(TEXCOORD.x, TEXCOORD.y, TEXCOORD.z), TEXCOORD.w), ivec2(1, 2), _159);
    SparseTexel _107 = SparseTexel(_158, _159);
    float _111 = _107._m1;
    _64 _112 = _64(_111, _111, _111, _111, _107._m0);
    uint _160;
    float _161;
    _160 = sparseTextureARB(samplerCubeShadow(_20, _26), vec4(vec3(TEXCOORD.x, TEXCOORD.y, TEXCOORD.z), TEXCOORD.w), _161);
    SparseTexel _122 = SparseTexel(_160, _161);
    float _125 = _122._m1;
    _64 _126 = _64(_125, _125, _125, _125, _122._m0);
    vec4 _137 = vec4(TEXCOORD.x, TEXCOORD.y, TEXCOORD.z, TEXCOORD.w);
    uint _162;
    float _163;
    _162 = sparseTextureARB(samplerCubeArrayShadow(_23, _26), _137, TEXCOORD.w, _163);
    SparseTexel _136 = SparseTexel(_162, _163);
    float _139 = _136._m1;
    _64 _140 = _64(_139, _139, _139, _139, _136._m0);
    float _146 = ((((((((((float(sparseTexelsResidentARB(int(_65._m4))) + _65._m0) + _81._m0) + float(sparseTexelsResidentARB(int(_81._m4)))) + _97._m0) + float(sparseTexelsResidentARB(int(_97._m4)))) + _112._m0) + float(sparseTexelsResidentARB(int(_112._m4)))) + _126._m0) + float(sparseTexelsResidentARB(int(_126._m4)))) + _140._m0) + float(sparseTexelsResidentARB(int(_140._m4)));
    SV_Target.x = _146;
    SV_Target.y = _146;
}


#if 0
// SPIR-V disassembly
; SPIR-V
; Version: 1.3
; Generator: Unknown(30017); 21022
; Bound: 152
; Schema: 0
OpCapability Shader
OpCapability SparseResidency
OpCapability Sampled1D
OpCapability SampledCubeArray
OpMemoryModel Logical GLSL450
OpEntryPoint Fragment %3 "main" %29 %32
OpExecutionMode %3 OriginUpperLeft
OpName %3 "main"
OpName %29 "TEXCOORD"
OpName %32 "SV_Target"
OpName %60 "SparseTexel"
OpName %64 ""
OpDecorate %8 DescriptorSet 1
OpDecorate %8 Binding 0
OpDecorate %11 DescriptorSet 1
OpDecorate %11 Binding 1
OpDecorate %14 DescriptorSet 1
OpDecorate %14 Binding 2
OpDecorate %17 DescriptorSet 1
OpDecorate %17 Binding 3
OpDecorate %20 DescriptorSet 1
OpDecorate %20 Binding 5
OpDecorate %23 DescriptorSet 1
OpDecorate %23 Binding 6
OpDecorate %26 DescriptorSet 0
OpDecorate %26 Binding 0
OpDecorate %29 Location 0
OpDecorate %32 Location 0
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
%18 = OpTypeImage %5 Cube 0 0 0 1 Unknown
%19 = OpTypePointer UniformConstant %18
%20 = OpVariable %19 UniformConstant
%21 = OpTypeImage %5 Cube 0 1 0 1 Unknown
%22 = OpTypePointer UniformConstant %21
%23 = OpVariable %22 UniformConstant
%24 = OpTypeSampler
%25 = OpTypePointer UniformConstant %24
%26 = OpVariable %25 UniformConstant
%27 = OpTypeVector %5 4
%28 = OpTypePointer Input %27
%29 = OpVariable %28 Input
%30 = OpTypeVector %5 2
%31 = OpTypePointer Output %30
%32 = OpVariable %31 Output
%40 = OpTypePointer Input %5
%42 = OpTypeInt 32 0
%43 = OpConstant %42 0
%46 = OpConstant %42 1
%49 = OpConstant %42 2
%52 = OpConstant %42 3
%54 = OpTypeImage %5 1D 1 0 0 1 Unknown
%55 = OpTypeSampledImage %54
%57 = OpTypeInt 32 1
%58 = OpConstant %57 1
%59 = OpConstant %5 0
%60 = OpTypeStruct %42 %5
%64 = OpTypeStruct %5 %5 %5 %5 %42
%68 = OpTypeBool
%71 = OpConstant %5 1
%73 = OpTypeImage %5 1D 1 1 0 1 Unknown
%74 = OpTypeSampledImage %73
%76 = OpConstant %57 2
%88 = OpTypeImage %5 2D 1 0 0 1 Unknown
%89 = OpTypeSampledImage %88
%93 = OpTypeVector %57 2
%94 = OpConstantComposite %93 %58 %76
%104 = OpTypeImage %5 2D 1 1 0 1 Unknown
%105 = OpTypeSampledImage %104
%108 = OpTypeVector %5 3
%119 = OpTypeImage %5 Cube 1 0 0 1 Unknown
%120 = OpTypeSampledImage %119
%133 = OpTypeImage %5 Cube 1 1 0 1 Unknown
%134 = OpTypeSampledImage %133
%147 = OpTypePointer Output %5
%3 = OpFunction %1 None %2
%4 = OpLabel
OpBranch %150
%150 = OpLabel
%33 = OpLoad %21 %23
%34 = OpLoad %18 %20
%35 = OpLoad %15 %17
%36 = OpLoad %12 %14
%37 = OpLoad %9 %11
%38 = OpLoad %6 %8
%39 = OpLoad %24 %26
%41 = OpAccessChain %40 %29 %43
%44 = OpLoad %5 %41
%45 = OpAccessChain %40 %29 %46
%47 = OpLoad %5 %45
%48 = OpAccessChain %40 %29 %49
%50 = OpLoad %5 %48
%51 = OpAccessChain %40 %29 %52
%53 = OpLoad %5 %51
%56 = OpSampledImage %55 %38 %39
%61 = OpImageSparseSampleDrefImplicitLod %60 %56 %44 %53 ConstOffset %58
%62 = OpCompositeExtract %42 %61 0
%63 = OpCompositeExtract %5 %61 1
%65 = OpCompositeConstruct %64 %63 %63 %63 %63 %62
%66 = OpCompositeExtract %5 %65 0
%67 = OpCompositeExtract %42 %65 4
%69 = OpImageSparseTexelsResident %68 %67
%70 = OpSelect %5 %69 %71 %59
%72 = OpFAdd %5 %70 %66
%75 = OpSampledImage %74 %37 %39
%78 = OpCompositeConstruct %30 %44 %47
%77 = OpImageSparseSampleDrefImplicitLod %60 %75 %78 %53 ConstOffset %76
%79 = OpCompositeExtract %42 %77 0
%80 = OpCompositeExtract %5 %77 1
%81 = OpCompositeConstruct %64 %80 %80 %80 %80 %79
%82 = OpCompositeExtract %5 %81 0
%83 = OpCompositeExtract %42 %81 4
%84 = OpImageSparseTexelsResident %68 %83
%85 = OpFAdd %5 %72 %82
%86 = OpSelect %5 %84 %71 %59
%87 = OpFAdd %5 %85 %86
%90 = OpSampledImage %89 %36 %39
%92 = OpCompositeConstruct %30 %44 %47
%91 = OpImageSparseSampleDrefImplicitLod %60 %90 %92 %53 ConstOffset %94
%95 = OpCompositeExtract %42 %91 0
%96 = OpCompositeExtract %5 %91 1
%97 = OpCompositeConstruct %64 %96 %96 %96 %96 %95
%98 = OpCompositeExtract %5 %97 0
%99 = OpCompositeExtract %42 %97 4
%100 = OpImageSparseTexelsResident %68 %99
%101 = OpFAdd %5 %87 %98
%102 = OpSelect %5 %100 %71 %59
%103 = OpFAdd %5 %101 %102
%106 = OpSampledImage %105 %35 %39
%109 = OpCompositeConstruct %108 %44 %47 %50
%107 = OpImageSparseSampleDrefImplicitLod %60 %106 %109 %53 ConstOffset %94
%110 = OpCompositeExtract %42 %107 0
%111 = OpCompositeExtract %5 %107 1
%112 = OpCompositeConstruct %64 %111 %111 %111 %111 %110
%113 = OpCompositeExtract %5 %112 0
%114 = OpCompositeExtract %42 %112 4
%115 = OpImageSparseTexelsResident %68 %114
%116 = OpFAdd %5 %103 %113
%117 = OpSelect %5 %115 %71 %59
%118 = OpFAdd %5 %116 %117
%121 = OpSampledImage %120 %34 %39
%123 = OpCompositeConstruct %108 %44 %47 %50
%122 = OpImageSparseSampleDrefImplicitLod %60 %121 %123 %53 None
%124 = OpCompositeExtract %42 %122 0
%125 = OpCompositeExtract %5 %122 1
%126 = OpCompositeConstruct %64 %125 %125 %125 %125 %124
%127 = OpCompositeExtract %5 %126 0
%128 = OpCompositeExtract %42 %126 4
%129 = OpImageSparseTexelsResident %68 %128
%130 = OpFAdd %5 %118 %127
%131 = OpSelect %5 %129 %71 %59
%132 = OpFAdd %5 %130 %131
%135 = OpSampledImage %134 %33 %39
%137 = OpCompositeConstruct %27 %44 %47 %50 %53
%136 = OpImageSparseSampleDrefImplicitLod %60 %135 %137 %53 None
%138 = OpCompositeExtract %42 %136 0
%139 = OpCompositeExtract %5 %136 1
%140 = OpCompositeConstruct %64 %139 %139 %139 %139 %138
%141 = OpCompositeExtract %5 %140 0
%142 = OpCompositeExtract %42 %140 4
%143 = OpImageSparseTexelsResident %68 %142
%144 = OpFAdd %5 %132 %141
%145 = OpSelect %5 %143 %71 %59
%146 = OpFAdd %5 %144 %145
%148 = OpAccessChain %147 %32 %43
OpStore %148 %146
%149 = OpAccessChain %147 %32 %46
OpStore %149 %146
OpReturn
OpFunctionEnd
#endif
